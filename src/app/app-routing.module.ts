import { FaqsComponent } from './faqs/faqs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EligibilitycalculatorComponent } from './eligibilitycalculator/eligibilitycalculator.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';





const routes: Routes = [
  {path: '',component:  HomeComponent },
  {path: 'registration',component: RegistrationComponent},
  {path: 'apply-now',component: ApplyNowComponent},
  {path: 'login',component: LoginComponent },
  {path: 'emicalculator',component: EmicalculatorComponent},
  {path: 'aboutus',component: AboutusComponent},
  {path: 'faqs',component: FaqsComponent},
  {path: 'contactus',component: ContactusComponent },
  {path:'dashboard', component: DashboardComponent},
  {path:'eligibilitycalculator', component: EligibilitycalculatorComponent},
  {path:'income-details', component: IncomeDetailsComponent},
  {path:'property-details', component: PropertyDetailsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
