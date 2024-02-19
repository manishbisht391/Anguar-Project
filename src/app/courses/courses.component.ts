import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
constructor(private courses:CoursesService){}
  getCourses:any;
  print:boolean = true;

  ngOnInit(){
    this.getCourses = this.courses.getCourses()
  }
}
