import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,FormControl, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ViewalldataComponent} from './components/viewalldata/viewalldata.component';
import {ViewcitiesComponent} from './components/viewcities/viewcities.component';
import {routing,appRoutingProviders} from './app.routing';
import { TemplateComponent } from './components/template/template.component';
import { GetCurrentWeatherComponent } from './components/get-current-weather/get-current-weather.component';
import { CitieslistComponent } from './components/citieslist/citieslist.component'
import { RegisterComponent } from './components/register/register.component';
import { ChartComponent } from './components/chart/chart.component';
import { SelectViewComponent } from './components/select-view/select-view.component';

import {CitiesService} from './services/cities.service'
import {WeatherService} from './services/weather.service';
import {UserService} from './services/user.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MainwelcomeComponent } from './components/mainwelcome/mainwelcome.component';
import { ErrorMessageLRComponent } from './components/error-message-lr/error-message-lr.component';
import { ErrorMessageCityComponent } from './components/error-message-city/error-message-city.component';
import { FooterComponent } from './components/footer/footer.component';





@NgModule({
  declarations: [
    AppComponent, LoginComponent,DashboardComponent,
     ViewalldataComponent,
     ViewcitiesComponent, TemplateComponent, GetCurrentWeatherComponent, CitieslistComponent, RegisterComponent, UserProfileComponent, MainwelcomeComponent, ErrorMessageLRComponent, ErrorMessageCityComponent, FooterComponent,ChartComponent,SelectViewComponent, 
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule,HttpModule,RouterModule,routing,ChartsModule
   
  ],
  providers: [CitiesService,WeatherService,CitieslistComponent,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
