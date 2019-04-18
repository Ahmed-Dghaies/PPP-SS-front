import { Component, OnInit, ViewChild } from '@angular/core';
import { CarteBonTypeService } from '../../shared/services/carte-bon-type.service';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CardType } from '../../shared/models/cardType.model'
//import { CardTypeAddComponent } from '../card-type-add/card-type-add.component';
//import { CardTypeGetComponent } from '../card-type-get/card-type-get.component';


@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  cardType = {cardCode: '', cardDescription: '' }
  cardTypes: CardType[]
  angForm: FormGroup;
  //@ViewChild(CardTypeAddComponent) addChildComponent: CardTypeAddComponent;
  //@ViewChild(CardTypeGetComponent) getChildComponent: CardTypeGetComponent;
  constructor(private _router: Router, private _formBuilder: FormBuilder, private _CardType: CarteBonTypeService, private _route: ActivatedRoute) {
    this.createForm();
  }


  createForm() {
    this.angForm = this._formBuilder.group({
      cardCode: ['', Validators.required],
      cardDescription: ['', Validators.required]
    });
  }
  //refreshFromChild() { this.refreshChild();}
  //refreshChild() { this.getChildComponent.refreshFromParent(); }

  ngOnInit() {
    
   }

}
