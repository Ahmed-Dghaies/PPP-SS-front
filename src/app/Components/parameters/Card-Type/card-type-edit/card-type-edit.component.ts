import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CarteBonTypeService } from '../../../../shared/services/carte-bon-type.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-card-type-edit',
  templateUrl: './card-type-edit.component.html',
  styleUrls: ['./card-type-edit.component.css']
})
export class CardTypeEditComponent implements OnInit {

  cardType: any = {};
  angForm: FormGroup;

  constructor(
    private router: Router,
    private cardTypeService: CarteBonTypeService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CardTypeEditComponent>
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = new FormGroup({
      _id: new FormControl(null),
      cardCode: new FormControl('', Validators.required),
      cardDescription: new FormControl('', Validators.required),
      __v: new FormControl('')
    });
  }

  updateCardType() {
    this.cardTypeService.updateCardType(this.data.dataKey._id, this.angForm.value)
      .subscribe(res => {
        this.router.navigate(['parameters']);
      });
    this.onClose();
  }

  onClose() {
    this.angForm.reset();
    this.dialogRef.close();
  }

  onClear() {
    this.angForm.reset();
  }

  ngOnInit() {
    this.cardTypeService.editCardType(this.data.dataKey._id).subscribe(res => {
      this.angForm.setValue(res);
    });
    console.log();
  }

}
