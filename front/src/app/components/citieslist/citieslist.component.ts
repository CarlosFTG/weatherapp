import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';

import { City } from '../../models/city';

import {CitiesService} from '../../services/cities.service';
import {Weather} from '../../models/weather';


@Component({
  selector: 'app-citieslist',
  templateUrl: './citieslist.component.html',
  styleUrls: ['./citieslist.component.css']
})
export class CitieslistComponent implements OnInit {
  //public city: City;
  public cities:City[];
  public weathers: Weather[];
  constructor(
    private _citiesService:CitiesService,
    
    private _router:Router,) { }

  ngOnInit() {
    this.getStorageCities();
  }

  getStorageCities(){

    this._citiesService.getCities().subscribe(

      response => {
        if (!response) {
          this._router.navigate(['/']);
        } else {
          this.weathers = response.weathers;

          this.cities=response;
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
  
  directToViewByCity(city){

    localStorage.setItem('cityToView',city)
    this._router.navigate(['viewByCity']);
  }

}
