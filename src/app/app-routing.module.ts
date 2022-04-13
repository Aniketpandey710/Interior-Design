import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PotfolioComponent } from './potfolio/potfolio.component';
import { TeamComponent } from './team/team.component';

import{ CartComponent} from './cart/cart.component';
import{ProductComponent} from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DataComponent } from './data/data.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
//import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'services',component:ServicesComponent},
  {path:'potfolio',component:PotfolioComponent},
  {path:'team',component:TeamComponent},
  {path:'cart', component:CartComponent},
  {path:'products',component:ProductComponent},
  {path:'data',component:DataComponent},
  {path:'employees-list',component:EmployeeListComponent},
  {path:'create-employee',component:EmployeeCreateComponent},
  { path: 'edit-employee/:id', component: EmployeeEditComponent },
  
  { path: 'checkout', component: CheckoutComponent },
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
},
{
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
},
{
    path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
},
{
    path: '', redirectTo: '/login', pathMatch: 'full'
}
];
  //{path:'disp',component:DispComponent}


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
