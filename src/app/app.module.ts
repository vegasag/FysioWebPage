import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NavigatorComponent } from './pages/navigator/navigator.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { HeaderComponent } from './pages/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContactUsComponent,
    NavigatorComponent,
    EmployeesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
