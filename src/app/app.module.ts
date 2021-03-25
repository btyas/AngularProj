import { SortPipe } from './Pipes/sort.pipe';
import { FilterPipe } from './Pipes/filter.pipe';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertifyServiceService } from './services/alertify-service.service';
import { UserServiceService } from './services/user-service.service';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HousingService } from './services/housing.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { AuthServiceService } from './services/auth-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PropertyDetailResolverService } from './property/property-detail/property-detail-resolver.service';

import { NgxGalleryModule } from '@kolkov/ngx-gallery';

const appRoutes: Routes = [
  {  path : 'User-register',          component: RegisterComponent },
   {  path : 'User-login',            component: LoginComponent},
  {  path: ''            ,            component: PropertyListComponent },
  {  path : 'rent-property',          component : PropertyListComponent},
  {  path: 'add-property',            component: AddPropertyComponent },
  {  path: 'property-detail/:id',     component: PropertyDetailComponent ,
      resolve : {prp : PropertyDetailResolverService} }
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
    RegisterComponent,
    FilterPipe,
    SortPipe


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule,
    MatSliderModule,








  ],
  providers: [HousingService,
              UserServiceService,
              AlertifyServiceService,
              AuthServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
