import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PotfolioComponent } from './potfolio/potfolio.component';
import { TeamComponent } from './team/team.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';
import { MatButtonModule } from '@angular/material/button';
//import { DispComponent } from './disp/disp.component'
import { MainServiceService } from './service/main-service.service';
import { FormGroup ,FormBuilder } from '@angular/forms';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { DataComponent } from './data/data.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { ApiService } from './servicee/api.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ServicesComponent,
    PotfolioComponent,
    TeamComponent,
    CartComponent,
    ProductComponent,
    DataComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    CheckoutComponent,AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent
   
  //  DispComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule , ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ProductService,MainServiceService,ApiService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
