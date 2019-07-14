import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css'],
  viewProviders: [MatExpansionModule]
})
export class ParametersComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
   }

}
