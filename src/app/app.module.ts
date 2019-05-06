import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NavigatorComponent } from './pages/navigator/navigator.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBoL1-bbuhOldVopYxMCl1X_fDUeoJnY84'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
