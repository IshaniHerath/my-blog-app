import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'my-experience',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './my-experience.component.html',
  styleUrls: ['./my-experience.component.scss'],
})
export class MyExperienceComponent {}
