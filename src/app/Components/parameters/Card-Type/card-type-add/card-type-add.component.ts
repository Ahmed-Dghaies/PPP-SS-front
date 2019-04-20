import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CarteBonTypeService } from '../../../../shared/services/carte-bon-type.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-card-type-add',
  templateUrl: './card-type-add.component.html',
  styleUrls: ['./card-type-add.component.css']
})
export class CardTypeAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(
    private cardTypeService: CarteBonTypeService,
    public dialogRef: MatDialogRef<CardTypeAddComponent>) {
    this.createForm();
  }

  createForm() {
    this.angForm = new FormGroup({
      cardCode: new FormControl('', Validators.required),
      cardDescription: new FormControl('', Validators.required),
    });
  }

  addCardType() {
    this.cardTypeService.addCardType(this.angForm.value)
      .subscribe(
        res => {
          this.angForm.reset();
        },
        err => console.log(err)
      );
    this.onClose();
  }

  onClose() {
    this.angForm.reset();
    this.dialogRef.close();
  }

  onClear() {
    this.angForm.reset();
  }

  getCardTypes() {
    return this.cardTypeService.getCardTypes();
  }

  ngOnInit() {
  }

}
