import { UserServiceService } from './services/user-service.service';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HousingService } from './services/housing.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';

const appRoutes: Routes = [
  {  path : 'User-register',          component: RegisterComponent },
   {  path : 'User-login',            component: LoginComponent},
  {  path: ''            ,            component: PropertyListComponent },
  {  path : 'rent-property',          component : PropertyListComponent},
  {  path: 'add-property',            component: AddPropertyComponent },
  {  path: 'property-detail/:id',     component: PropertyDetailComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavbarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule



  ],
  providers: [HousingService, UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
