import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { CardType } from '../models/cardType.model';
import { CarburantService } from './carburant.service';
import { Carburant } from '../models/carburant';

@Injectable({
  providedIn: 'root'
})
export class CarteBonTypeService {

  public cardTypes: CardType[];
  public cardTypesMatTab: MatTableDataSource<any>;

  private uri = 'https://ppp-ss.herokuapp.com/cardType';

  constructor(private http: HttpClient,
              private carburantService: CarburantService) {
    this.cardTypes = [];
    this.cardTypesMatTab = new MatTableDataSource(this.cardTypes);
   }

  addCardType(cardType: CardType) {
    return this.http.post<any>(`${this.uri}/add`, cardType);
  }

  getCardTypesList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<CardType[]>(`${this.uri}/list`).subscribe((data: CardType[]) => {
      this.cardTypes = data;

      let carburant: Carburant;
      this.cardTypes.forEach((element: CardType) => {
        this.carburantService.getById(element.cardCarburant).subscribe((res: Carburant) => {
          carburant = res;
          element.cardCarburant = carburant.ref;
        });
      });
      this.cardTypes = this.cardTypes.reverse();
      this.cardTypesMatTab.data = this.cardTypes;
      if (sort) {
        this.cardTypesMatTab.sort = sort;
      }
      if (paginator) {
        this.cardTypesMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  editCardType(id: string) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateCardType(id: string, cardType: CardType) {
    return this.http.put(`${this.uri}/update/${id}`, cardType);
  }

  deleteCardType(id: string) {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }
}
