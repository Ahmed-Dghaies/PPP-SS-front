import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CarteBonService } from 'app/shared/services/carte-bon.service';
import { BonValeurService } from 'app/shared/services/bon-valeur.service';
import { ChequeService } from 'app/shared/services/cheque.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ShowDetailsComponent>,
    public cardBonService: CarteBonService,
    public bonValeurService: BonValeurService,
    public chequeService: ChequeService) { }

  ngOnInit() {
  }

  getTotalPrevue() {
    return parseFloat(this.bonValeurService.getTotalPrevue()) +
            parseFloat(this.cardBonService.getTotalPrevue()) +
            parseFloat(this.chequeService.getTotalPrevue());
  }

  onClose() {
    this.dialogRef.close();
  }

}
