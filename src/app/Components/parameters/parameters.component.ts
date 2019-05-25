import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CardType } from '../../shared/models/cardType.model';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css'],
  viewProviders: [MatExpansionModule]
})
export class ParametersComponent implements OnInit {

  cardType = {cardCode: '', cardDescription: '' };
  cardTypes: CardType[];
  angForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      cardCode: ['', Validators.required],
      cardDescription: ['', Validators.required]
    });
  }

  ngOnInit() {
   }

}
