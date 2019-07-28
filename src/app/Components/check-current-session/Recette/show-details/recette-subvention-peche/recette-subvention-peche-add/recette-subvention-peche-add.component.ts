import { Component, OnInit, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SessionService } from 'app/shared/services/session.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { SubventionPeche } from 'app/shared/models/subventionPeche';
import { SubventionPecheService } from 'app/shared/services/subvention-peche.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-recette-subvention-peche-add',
  templateUrl: './recette-subvention-peche-add.component.html',
  styleUrls: ['./recette-subvention-peche-add.component.css']
})
export class RecetteSubventionPecheAddComponent implements OnInit {

  public subventionPeche: SubventionPeche;
  public width: number;
  public screenHeight: number;
  public screenWidth: number;

  constructor(private dialogMat: MatDialogRef<RecetteSubventionPecheAddComponent>,
              private subventionPecheService: SubventionPecheService,
              private notifService: NotificationService,
              private sessionService: SessionService) {
    this.subventionPeche = new SubventionPeche();
    this.width = 2;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 650) {
      this.width =  1;
    } else {
      this.width =  2;
    }
  }

  ngOnInit() {
    const datetime = new Date();
    const date = datetime.toISOString().slice(0, 10);
    this.subventionPeche.date = date;
  }

  onClose(): void {
    this.dialogMat.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  addSubventionPeche(): void {
    this.subventionPeche.state = 'Non';
    this.subventionPeche.sessionId = this.sessionService.sessions[0]._id;
    this.subventionPecheService.addSubventionPeche(this.subventionPeche).subscribe(res => {
      this.subventionPecheService.getSubventionPechesListById(this.sessionService.currentSessionId);
      this.dialogMat.close();
      this.notifService.success('Bon subvention peche ajouter avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
