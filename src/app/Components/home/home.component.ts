import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/services/session.service';
import { Session } from 'src/app/shared/models/session.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public displayedColumns: string[];

  constructor(private sessionService: SessionService) {
    this.displayedColumns = ['date', 'poste', 'description', 'state'];
  }

  ngOnInit() {
    this.sessionService.getCurrentSession();
    console.log(this.sessionService.sessionMatTab);
  }

}
