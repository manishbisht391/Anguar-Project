import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogService } from '../dialog.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crisis-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crisis-detail.component.html',
  styleUrl: './crisis-detail.component.css'
})
export class CrisisDetailComponent {
  crisis = 'flood';
  editName = '';

  constructor(    
    public dialogService: DialogService
  ) {}  

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (this.crisis === this.editName) {
      return true;
    }

    console.log('You had unsaved data.');
    
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }
}
