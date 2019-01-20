import {Injectable} from '@angular/core'
import{Http, Response, Headers }from '@angular/http'
import  'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import {Observable }from 'rxjs/Observable'
import {GLOBAL} from './global.service';

@Injectable()
export class UserService{
    public identity;
    public token: String;
    public url: String;

    constructor(private _http: Http){
        this.url=GLOBAL.url;
    }

    register(user_to_register){
        let params=JSON.stringify(user_to_register);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post(this.url + 'user/create', params, { headers: headers }).pipe(map(res => res.json()));
        
    }

    public signUp(user_to_login, gethash=null){

        if (gethash != null) {
                user_to_login.gethash = gethash;
            }
            const json = JSON.stringify(user_to_login);
            const params = json;        
            const headers = new Headers({'Content-Type': 'application/json'});
    
            return this._http.post(this.url + 'login', params, { headers: headers }).pipe(map(res => res.json()));
        }
    
        getIdentity(){
            let identity=JSON.parse(localStorage.getItem('identity'));
    
            if(identity!=undefined){
                this.identity
            }else{
                this.identity=null;
            }
    
            return identity;
        }
    
        getToken(){
            let token=JSON.parse(localStorage.getItem('token'));
            if(token!=undefined){
                this.token
            }else{
                this.token=null;
            }
    
            return token;
        }

        removeAccount(){
            let headers=new Headers({
                'Content-type':'application/json',
                'Authorization':'token'
            })

            let localstorage=JSON.parse(localStorage.getItem('identity'));
            let idUser=localstorage._id;
            var params={_id:idUser};
            return this._http.post(this.url + '/user/removeUser',params, { headers: headers })
            .pipe(map(res => res.json()));

        }
}