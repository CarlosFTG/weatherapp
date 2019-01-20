import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../../services/user.service';
import {GLOBAL} from '../../services/global.service';
import {WeatherService} from '../../services/weather.service';
import {Weather} from '../../models/weather';
import {City} from '../../models/city';
import { error } from 'util';
import {TemplateComponent} from '../template/template.component';

@Component({
  selector: 'app-viewalldata',
  templateUrl: './viewalldata.component.html',
  styleUrls: ['./viewalldata.component.css'],
  providers:[UserService, WeatherService,TemplateComponent ]
})
export class ViewalldataComponent implements OnInit {

  public title: String;
  public weathers: Weather[];
  public identity;
  public token;
  public url: String;
  public page;
  public prev_page;
  public next_page;
  public city: City;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _userService:UserService,
    private _weatherService: WeatherService,
    

  ) { this.title="Your storaged data";
      this.identity=this._userService.getIdentity;
      this.token=this._userService.getToken;
      this.url=GLOBAL.url;
      this.city=new City("");
}
ngOnInit(){
  
  this.getData();
};

getData() {
  this._route.params.forEach((params: Params) => {
    let page = +params['page'];
    if (!page) {
      page = 1;
      this.next_page = page + 1; 
      this.prev_page = page - 1;
    } else {
      this.next_page = page + 1;
      this.prev_page = page - 1;
      if (this.prev_page === 0) {
        this.prev_page = 1;
      }
    }
    this._weatherService.showAllData(this.token, page).subscribe(
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
    });
  }

  public onSubmit(){
    localStorage.setItem('city',JSON.stringify(this.city.name));
    this._weatherService.getCurrentWheather(this.city.name).subscribe(
      response=>{
        let city=response.city;
        this.city=city;
        localStorage.setItem('city',JSON.stringify(this.city));
        }
      )
      }

  public removeSingleData(){
    this._weatherService.removeSingleData(this.city).subscribe(
      
    )
  }
    
  }

