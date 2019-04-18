import { Component, OnInit, ViewChild } from '@angular/core';
import { CarteBonTypeService } from '../../shared/services/carte-bon-type.service';
import { Router, ActivatedRoute } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CardType } from '../../shared/models/cardType.model';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  cardType = {cardCode: '', cardDescription: '' };
  cardTypes: CardType[];
  angForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this._formBuilder.group({
      cardCode: ['', Validators.required],
      cardDescription: ['', Validators.required]
    });
  }

  ngOnInit() {
   }

}
