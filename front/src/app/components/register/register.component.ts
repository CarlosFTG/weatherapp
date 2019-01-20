import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/models';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user:User;
  public identity;
  public errorMessage;
  
  constructor(
    private _router:Router,private _userService:UserService) {
      this.user=new User("","","","","","USER","","") 
     }

  ngOnInit() {
  }

  redirectToLogin(){
    this._router.navigate(['login'])
  }

  public register(){
    this._userService.register(this.user).subscribe(
      
      response=>{
        var user=response;
        this.user=user;
        if(response){
          this._router.navigate(['login']);
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
