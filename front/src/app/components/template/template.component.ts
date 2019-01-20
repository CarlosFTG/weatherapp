import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';

import { UserService } from '../../services/user.service';

import {Weather} from '../../models/weather';



@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  providers:[UserService]
})
export class TemplateComponent implements OnInit {
  public identity;
  public token: String;
  public weathers: Weather[];
  
  constructor(private _route:ActivatedRoute,
    private _router:Router,
    private _userService:UserService,
    
    
     ) { }

  ngOnInit() {

    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  directToViewAll(){
    this._router.navigate(['viewAllData'])
  }

  directToUserProfile(){
    this._router.navigate(['userProfile'])
  }

  directToGetCurrentWeather(){
    this._router.navigate(['getCurrentWeather'])
  }

  viewCitiesList(){
    this._router.navigate(['citiesList']);
  }
 
  
  
  public logOut() {
    
    localStorage.removeItem('identity'); 
    localStorage.removeItem('token');
    localStorage.clear(); 
    this.identity = null; 
    this.token = null;
    this._router.navigate(['login'])
}

}
