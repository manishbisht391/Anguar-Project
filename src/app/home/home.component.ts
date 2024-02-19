import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutSectionComponent } from "../about-section/about-section.component";
import { CoursesComponent } from "../courses/courses.component";
import { WhyChooseComponent } from "../why-choose/why-choose.component";
import { CounterComponent } from "../counter/counter.component";
import { TrainerComponent } from "../trainer/trainer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeroSectionComponent, AboutSectionComponent, CoursesComponent, WhyChooseComponent, CounterComponent, TrainerComponent]
})
export class HomeComponent {

}
