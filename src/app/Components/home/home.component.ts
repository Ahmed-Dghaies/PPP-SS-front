import { Component, OnInit, HostListener } from '@angular/core';
import { SessionService } from 'app/shared/services/session.service';
import { Session } from 'app/shared/models/session.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public displayedColumns: string[];
  screenHeight: any;
  screenWidth: any;

  constructor(public sessionService: SessionService) {
    this.displayedColumns = ['date', 'poste', 'description', 'state'];
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          if (this.screenWidth < 650) {
            this.displayedColumns = ['date', 'poste', 'state'];
          } else {
            this.displayedColumns = ['date', 'poste', 'description', 'state'];
          }
    }

  ngOnInit() {
    this.sessionService.getCurrentSession();
  }

}
