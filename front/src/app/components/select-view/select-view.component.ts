import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-select-view',
  templateUrl: './select-view.component.html',
  styleUrls: ['./select-view.component.css']
})
export class SelectViewComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  redirectToCards(){
    this._router.navigate(['viewByCity']);
  }

  redirectToCharts(){
    this._router.navigate(['chartView']);
  }

}
