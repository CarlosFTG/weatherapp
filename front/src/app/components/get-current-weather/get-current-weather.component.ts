import { Component, OnInit } from '@angular/core';

import {WeatherService} from '../../services/weather.service'
import {City} from '../../models/city'
import { error } from 'util';

@Component({
  selector: 'app-get-current-weather',
  templateUrl: './get-current-weather.component.html',
  styleUrls: ['./get-current-weather.component.css']
})
export class GetCurrentWeatherComponent implements OnInit {
  public city:City;
  public errorMessage;
  public successMessage;
  public cityRegistered=false;
  constructor(private _weatherService:WeatherService) {this.city=new City(""); }

  ngOnInit() {
  }
  public onSubmit(){
    this._weatherService.getCurrentWheather(this.city).subscribe(
      response=>{
        let city=response.city;
        this.city=city;
        var successMessage=<any>response;
        if(successMessage!=null){
          this.successMessage=response._body;
        }
        
        },
        error=>{
        var errorMessage=<any>error;
        if(errorMessage!=null){
          this.errorMessage=error._body;
        }
      }
      
      )
      }
}
