import {Injectable} from '@angular/core'
import{Http, Response, Headers, RequestOptions }from '@angular/http'
import  'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import {Observable }from 'rxjs/Observable'
import {GLOBAL} from './global.service';
import { identity } from 'rxjs';

@Injectable()
export class WeatherService{

    public url: String;
    public city: String;

    constructor(private _http: Http){
        this.url=GLOBAL.url;
    }

    showAllData (token, page) {
        let headers=new Headers({
            'Content-type':'application/json',
            'Authorization':'token'
        })

        let params=JSON.parse(localStorage.getItem('identity'));

        return this._http.post(this.url + 'weather/getSavedData1',params, { headers: headers })
        .pipe(map(res => res.json()));
    }

    showWheatherByCity(city){
        let headers=new Headers({
            'Content-type':'application/json',
            'Authorization':'token'
        })

        let localstorage=JSON.parse(localStorage.getItem('identity'));
        let idUser=localstorage._id;
        var params={userId:idUser,city};
        
        return this._http.post(this.url + 'weather/getSavedDataByCity',params, { headers: headers })
            .pipe(map(res => res.json()));
    }


    getCurrentWheather(city){
        const headers = new Headers({'Content-Type': 'application/json'});

        let localstorage=JSON.parse(localStorage.getItem('identity'));
        let idUser=localstorage._id;
        let cityToRequest=city.name;
        var params={userId:idUser,city:cityToRequest};
		return this._http.post(this.url + 'weather/getWeather',params, { headers: headers }).pipe(map(res => res.json()));
    }

    removeSingleData(city){
        const headers = new Headers({'Content-Type': 'application/json'});
        let json=JSON.parse(localStorage.getItem('identity'));
        let cityPass=JSON.parse(localStorage.getItem('city'));
        const params = json;
		return this._http.delete(this.url + 'weather/removeData',params,).pipe(map(res => res.json()));

    }
}
