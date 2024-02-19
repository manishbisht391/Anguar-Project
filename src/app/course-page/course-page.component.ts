import { Component } from '@angular/core';
import { CoursesComponent } from "../courses/courses.component";

@Component({
    selector: 'app-course-page',
    standalone: true,
    templateUrl: './course-page.component.html',
    styleUrl: './course-page.component.css',
    imports: [CoursesComponent]
})
export class CoursePageComponent {

}
