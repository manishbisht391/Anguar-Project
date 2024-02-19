import { Component } from '@angular/core';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { WhyChooseComponent } from "../why-choose/why-choose.component";
import { CounterComponent } from "../counter/counter.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [AboutSectionComponent, WhyChooseComponent, CounterComponent]
})
export class AboutComponent {

}
