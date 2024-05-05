import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'education-qualification',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './education-qualification.component.html',
  styleUrl: './education-qualification.component.scss',
})
export class EducationQualificationComponent {}
