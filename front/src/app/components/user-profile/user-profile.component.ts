import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';

import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public userId;
  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit() {
  }

  removeAccount(){
    this._userService.removeAccount().subscribe(
      response=>{
        this._router.navigate(['login']);
      },
      error => {
        let errorMessage = <any>error;
        if (errorMessage !== null) {
          let body = JSON.parse(error._body); 
          }
        }
    )
  }

}
