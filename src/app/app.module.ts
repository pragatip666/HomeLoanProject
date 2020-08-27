import { FaqsComponent } from './faqs/faqs.component';
import {CookieService} from 'ngx-cookie-service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Ng5SliderModule } from 'ng5-slider';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { EligibilitycalculatorComponent } from './eligibilitycalculator/eligibilitycalculator.component';
//import { IncomeDetailsComponent } from './income-details/income-details.component';
//import { PropertyDetailsComponent } from './property-details/property-details.component';
import { RegisterNavbarComponent } from './register-navbar/register-navbar.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { IncomedetailsComponent } from './incomedetails/incomedetails.component';
import { PropertydetailsComponent } from './propertydetails/propertydetails.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SelectApplicantsComponent } from './select-applicants/select-applicants.component';
import { ShowApplicantsComponent } from './show-applicants/show-applicants.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdministratorComponent } from './administrator/administrator.component';
//import { ViewApplicantsComponent } from './view-applicants/view-applicants.component';
//import { ShortlistApplicantsComponent } from './shortlist-applicants/shortlist-applicants.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
   ContactusComponent,
    FooterComponent,
    ImageSliderComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    EmicalculatorComponent,
    LoginComponent,
    DashboardComponent,
    RegistrationComponent,
    EligibilitycalculatorComponent,
    FaqsComponent,
    AdministratorComponent,
    RegisterNavbarComponent,
    ApplyNowComponent,
    IncomedetailsComponent,
    PropertydetailsComponent,
      AdminComponent,
   AdminloginComponent,
  // ShortlistApplicantsComponent,
   //ViewApplicantsComponent,
   SelectApplicantsComponent,
  ShowApplicantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng5SliderModule,
    ReactiveFormsModule,
   // FormBuilder,
   // FormGroup,
   // Validators
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
