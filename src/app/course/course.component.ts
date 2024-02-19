import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, Router, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import { CoursesService } from '../courses.service';
import { Nested1Component } from "../nested-1/nested-1.component";

@Component({
    selector: 'app-course',
    standalone: true,
    templateUrl: './course.component.html',
    styleUrl: './course.component.css',
    imports: [CommonModule, RouterModule, Nested1Component]
})
export class CourseComponent {
  constructor(private route: ActivatedRoute, private router: Router, private courseService: CoursesService) { }
  routeP: number = 1;
  course:{id?:number, title?:string, fee?:string, duration?:number, detail?:string, training?:string} = {};

  ngOnInit() {
    /* const routeParam = this.route.params;
    console.log(routeParam); */

    const getInfo = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get('id')!)
    );

    getInfo.subscribe((data) => this.routeP = +data);

    this.course = this.courseService.getCourse(this.routeP);
    /* console.log(this.route.params);
    console.log(this.route.fragment);
    console.log(this.route.paramMap);
    console.log(this.route.queryParamMap);
    console.log(this.route.queryParams);
    console.log(this.route.snapshot); */
  }
}
