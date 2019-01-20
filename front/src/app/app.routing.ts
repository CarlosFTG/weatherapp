import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//import components
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ViewalldataComponent} from './components/viewalldata/viewalldata.component';
import {ViewcitiesComponent} from './components/viewcities/viewcities.component';
import {CitieslistComponent} from './components/citieslist/citieslist.component';
import {GetCurrentWeatherComponent} from './components/get-current-weather/get-current-weather.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component'
import {ChartComponent} from './components/chart/chart.component'


const AppRoutes: Routes =   [


    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'dashBoard', component:DashboardComponent},
    {path:'viewAllData', component:ViewalldataComponent},
    {path:'viewByCity', component:ViewcitiesComponent},
    {path:'citiesList', component:CitieslistComponent},
    {path:'getCurrentWeather', component:GetCurrentWeatherComponent},
    {path:'userProfile', component:UserProfileComponent},
    {path:'chartView', component:ChartComponent},



     { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
    }  
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);