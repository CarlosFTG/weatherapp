import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';

import {CitiesService} from '../../services/cities.service';
import {WeatherService} from '../../services/weather.service';
import {Weather} from '../../models/weather';
import {City} from '../../models/city';
import { error } from 'util';

@Component({
  selector: 'app-viewcities',
  templateUrl: './viewcities.component.html',
  styleUrls: ['./viewcities.component.css'],
  providers:[CitiesService]
})
export class ViewcitiesComponent implements OnInit {

  public title: String;
  public weathers: Weather[];
  public weathersCity: Weather[];
  public identity;
  public token;
  public url: String;
  public page;
  public prev_page;
  public next_page;
  public city: City;
  public cityPassed;
  constructor(    
    private _route:ActivatedRoute,
    private _router:Router,
    private _citiesService:CitiesService,
    private _weatherService:WeatherService) { }

  ngOnInit() {
    this.showCityWeather();
    this.getStorageCities()
  }

  showCityWeather(){
    var localStorageRetrieve=localStorage.getItem("cityToView");

    var city=localStorageRetrieve;

    this._weatherService.showWheatherByCity(city).subscribe(
      response=>{if(!response){
        this._router.navigate(['/']);
      }else{
        this.weathersCity = response;
      }},
      error => {
        let errorMessage = <any>error;
        if (errorMessage !== null) {
          let body = JSON.parse(error._body); 
          }
        }
    )
  }

  redirectToCityWeatherView(){
    localStorage.setItem('selectedCity',this.cityPassed);
    this._router.navigate(['viewCityWeather'])
  }

  getStorageCities(){
    this._citiesService.getCities().subscribe(

      response => {
        if (!response) {
          this._router.navigate(['/']);
        } else {
          this.weathers = response.weathers;

          this.weathers=response;
          
        }
      },
      error => {
        let errorMessage = <any>error;
        if (errorMessage !== null) {
          let body = JSON.parse(error._body); 
          }
        }
      );
  }  
}
