import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {
  public user:User;
  public identity;
  public token: String;
  public errorMessage;

  constructor(private _route:ActivatedRoute,
    private _router:Router,private _userService:UserService) {this.user=new User("","","","","","USER","","") }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  redirectToRegister(){
    this._router.navigate(['register']);
  }

  public onSubmit(){
    
    this._userService.signUp(this.user).subscribe(
      response=>{
        let identity=response.user;
        this.identity=identity;

        if(!this.identity._id){
          alert("Usuario no identificado")
        }else{

          localStorage.setItem('identity',JSON.stringify(identity));
          this._userService.signUp(this.user,'true').subscribe(
            response=>{
              let token=response.token;
              this.token=token;
              if(this.token.length<=0){
                alert("token incorrecto")
              }else{
                localStorage.setItem(token,token);
                this._router.navigate(['dashBoard'])
              }
            },
            error=>{
              var errorMessage=<any>error;
              if(errorMessage!=null){
                this.errorMessage=error._body;
              }
            }
          );
        }
      },
      error=>{
        var errorMessage=<any>error;
        if(errorMessage!=null){
          this.errorMessage=error._body;
        }
      }
    );
  }


}
