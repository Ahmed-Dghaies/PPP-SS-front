import { Component, OnInit } from '@angular/core';
//import { ParametersService } from '../parameters.service';
import { Router } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  specialEvents = []
  constructor(/*private _parameterService: ParametersService,*/private _router: Router) { }


ngOnInit() {
 /* this._parameterService.getParameters()
  .subscribe(
    res => this.specialEvents = res,
    err => {
      if( err instanceof HttpErrorResponse ) {
        if ((err.status === 401) || (err.status === 500)) {
          this._router.navigate(['/login'])
        } 
      }
    }
  )*/
}

}
