import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from './hero';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  powers = ['Graphic Design', 'Web Design', 'Web Development', 'Animation', 'Video Editing'];
  submitted = false;

  model = new Hero(18, 'Virat Bisht', this.powers[1], 'abd17@gmail.com');

  onSubmit() { this.submitted = true; }
}
