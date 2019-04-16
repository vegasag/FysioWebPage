import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NavigatorComponent } from './pages/navigator/navigator.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContactUsComponent,
    NavigatorComponent,
    EmployeesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
