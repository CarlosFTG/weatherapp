import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';


import {Weather} from '../../models/weather';
import { City } from '../../models/city';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public identity;
  public token: String;
  public name: String;
  public weathers: Weather[];
  public cities: City[];
  public city: City;
  constructor(private _route:ActivatedRoute,
    private _router:Router,) { }

  ngOnInit() {

    /* this.identity = this._userService.getIdentity();
this.token = this._userService.getToken(); */
  }


  
  
  
  
  

}
