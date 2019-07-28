import { Component, OnInit, HostListener, SimpleChanges, Input } from '@angular/core';
import { CiterneService } from 'app/shared/services/citerne.service';
@Component({
  selector: 'app-tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.css']
})
export class TanksComponent implements OnInit {

  @Input() public tanks: any;
  public tank: {
    tankRef: string,
    tankCarburant: string,
    tankLevel: number,
    percentage: number,
    warning: boolean
  };
  public cols: number;
  screenHeight: any;
  screenWidth: any;

  constructor(private tankService: CiterneService) {
    this.getScreenSize();
    this.tank = { tankRef: '', tankCarburant: '', tankLevel: 0, percentage: 0, warning: false };
    this.tanks = [];
  }

  setDefault() {
    this.tanks = [];
    for (let _i = 0; _i < 4; _i++) {
      this.tanks.push(this.tank);
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 500) {
      this.cols = 1;
    } else if (this.screenWidth < 1000) {
      this.cols = 2;
    } else if (this.screenWidth < 1450) {
      this.cols = 3;
    } else {
      this.cols = 4;
    }
  }

  setData() {
    this.tanks = [];
    let warningValue: boolean;
    let value: number;
    let percen: number;
    this.tankService.citernes.forEach(citerne => {
      value = (citerne.stock * 300) / citerne.capacite;
      value = Math.floor(value);
      percen = parseFloat(((100 * value) / 300).toFixed(3));
      if (percen < 30) {
        warningValue = true;
      } else {
        warningValue = false;
      }
      this.tank = { tankRef: citerne.libelle,
                    tankCarburant: citerne.carburant,
                    tankLevel: value,
                    percentage: percen,
                    warning: warningValue};
      this.tanks.push(this.tank);
    });
  }

  ngOnInit(): void {
    this.tankService.getCiternesList();
    this.setDefault();
  }
}
