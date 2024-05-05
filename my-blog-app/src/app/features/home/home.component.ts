import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MyExperienceComponent } from '../my-experience/my-experience.component';
import { EducationQualificationComponent } from '../education-qualification/education-qualification.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    MatCardModule,
    MyExperienceComponent,
    EducationQualificationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = "I'M ISHANI";
}
