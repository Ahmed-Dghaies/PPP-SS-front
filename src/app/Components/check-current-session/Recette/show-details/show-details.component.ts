import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CarteBonService } from 'app/shared/services/carte-bon.service';
import { BonValeurService } from 'app/shared/services/bon-valeur.service';
import { ChequeService } from 'app/shared/services/cheque.service';
import { PayementCreditService } from 'app/shared/services/payement-credit.service';
import { StegEtAutresService } from 'app/shared/services/steg-et-autres.service';
import { EspeceService } from 'app/shared/services/espece.service';
import { SubventionPecheService } from 'app/shared/services/subvention-peche.service';

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
    public payementCreditService: PayementCreditService,
    public stegEtAutreService: StegEtAutresService,
    public chequeService: ChequeService,
    public especeService: EspeceService,
    public subventionPecheService: SubventionPecheService) { }

  ngOnInit() {
  }

  getTotalPrevue() {
    return parseFloat(this.bonValeurService.getTotalPrevue()) +
            parseFloat(this.cardBonService.getTotalPrevue()) +
            parseFloat(this.payementCreditService.getTotalPrevue()) +
            parseFloat(this.especeService.getTotalPrevue()) +
            parseFloat(this.subventionPecheService.getTotalPrevue()) +
            parseFloat(this.chequeService.getTotalPrevue());
  }

  onClose() {
    this.dialogRef.close();
  }

}
