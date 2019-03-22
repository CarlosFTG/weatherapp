import {Injectable} from '@angular/core'
import{Http, Response, Headers, RequestOptions }from '@angular/http'
import  'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import {Observable }from 'rxjs/Observable'
import {GLOBAL} from './global.service';
import { identity } from 'rxjs';
import { Map } from '../models/map'

@Injectable()
export class MapService{

public coords:[number];
public url: String;
constructor(private _http: Http){
    this.url=GLOBAL.url;
}

getCoordinates(){
    let headers=new Headers({
        'Content-type':'application/json',
        'Authorization':'token'
    })
    let params=JSON.parse(localStorage.getItem('identity'));
    let userId=params._id;
    return this._http.post(this.url + 'user/getCityCoords',params, { headers: headers })
        .pipe(map(res => res.json()));
}

}
