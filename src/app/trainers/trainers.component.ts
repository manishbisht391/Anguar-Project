import { Component } from '@angular/core';
import { TrainerComponent } from "../trainer/trainer.component";

@Component({
    selector: 'app-trainers',
    standalone: true,
    templateUrl: './trainers.component.html',
    styleUrl: './trainers.component.css',
    imports: [TrainerComponent]
})
export class TrainersComponent {

}
