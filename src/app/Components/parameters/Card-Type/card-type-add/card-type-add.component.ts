import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
    private _formBuilder: FormBuilder,
    private _CardType: CarteBonTypeService,
    public dialogRef: MatDialogRef<CardTypeAddComponent>) {
    this.createForm()
  }

  createForm() {
    this.angForm = new FormGroup({
      cardCode: new FormControl('', Validators.required),
      cardDescription: new FormControl('', Validators.required),
    });
  }

  addCardType() {
    this._CardType.addCardType(this.angForm.value)
      .subscribe(
        res => {
          this.angForm.reset();
        },
        err => console.log(err)
      )
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
    return this._CardType.getCardTypes();
  }

  ngOnInit() {
  }

}
