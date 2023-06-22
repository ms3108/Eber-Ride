import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthInterceptor } from './auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { AuthService } from './Service/auth.service';
import { CountryComponent } from './components/country/country.component';
import { CityComponent } from './components/city/city.component';
import { UsersComponent } from './components/users/users.component';
import { DriverComponent } from './components/driver/driver.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SettingComponent } from './components/setting/setting.component';  
import { MaterialModule } from './material-module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    AdminComponent,
    VehicleComponent,
    CountryComponent,
    CityComponent,
    UsersComponent,
    DriverComponent,
    PricingComponent,
    SettingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }