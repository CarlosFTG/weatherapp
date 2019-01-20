import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {Chart} from 'chart.js'

import {WeatherService} from '../../services/weather.service';
import {Weather} from '../../models/weather';

@Component({
  selector: 'app-viewcities',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers:[]
})

export class ChartComponent implements OnInit {
  chart = [];

  public title: String;
  public weathers: Weather[];
  public weathersCity: Weather[];
  public identity;
  public token;
  public url: String;
  public page;
  public prev_page;
  public next_page;
  public cityPassed;
  public temperature=[];
  public precipitations=[];
  public dates=[];
  labels: any = [];
  data: any = [];
  colors: any=[];
  constructor(    
    private _route:ActivatedRoute,
    private _router:Router,
    private _weatherService:WeatherService) { }

    ngOnInit() {
      this.showCityWeather();
    }

    showCityWeather(){
      var localStorageRetrieve=localStorage.getItem("cityToView");
  
      var city=localStorageRetrieve;
  
      this._weatherService.showWheatherByCity(city).subscribe(
        response=>{if(!response){
          this._router.navigate(['/']);
        }else{
          this.weathersCity = response;
          //loop the object and add the data to the chart's array
          for(let i=0;i<this.weathersCity.length;i++){
            this.temperature.push(this.weathersCity[i].temperature)
            this.precipitations.push(this.weathersCity[i].precipitations)
            this.dates.push(this.weathersCity[i].date)
            if(this.weathersCity[i].temperature>=0){
              this.colors.push('rgba(204, 46, 46, 1)')
            }else{
              this.colors.push('rgba(83, 46, 204, 1)')
            }
            }
        }},
        error => {
          let errorMessage = <any>error;
          if (errorMessage !== null) {
            let body = JSON.parse(error._body); 
            }
          }
      )
    }
    showchart = false;
    ngAfterViewInit() {
      this.chart=new Chart('canvas',{
        type:'bar',
        data:{
          labels:this.dates,
          datasets:[{
            label: 'Temp. in Cº',
           data:this.temperature,
           backgroundColor: 
            this.colors
            ,
            borderColor: this.colors,
           borderWidth: 5
          },{
            label: 'Precipitations in mm',
            data: this.precipitations,
            type: 'line'
          }]
        },
        options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:false
                  }
              }]
          }
      }
      })
      setTimeout(() => {
        this.showchart = true;
        },100)
      }
  }