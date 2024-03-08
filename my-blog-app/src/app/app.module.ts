import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './features/components/home/home.component';
import { AboutMeComponent } from './features/components/about-me/about-me.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HomeComponent,
    AboutMeComponent,
    // MatSlideToggleModule,
  ]
})
export class AppModule { }
