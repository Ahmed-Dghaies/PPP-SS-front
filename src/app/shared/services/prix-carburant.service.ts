import { Injectable } from '@angular/core';
import { PrixCarburant } from '../models/prixcarburant';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { CarburantService } from './carburant.service';
import { Carburant } from '../models/carburant';



@Injectable({
  providedIn: 'root'
})
export class PrixCarburantService {

  public prixCarburants: PrixCarburant[];
  public carburant: Carburant;
  public carburantsMatTab: MatTableDataSource<any>;

  private uri = 'https://ppp-ss.herokuapp.com/prixcarburant';

  constructor(private http: HttpClient,
    private carburantService: CarburantService) {
    this.prixCarburants = [];
    this.carburantsMatTab = new MatTableDataSource(this.prixCarburants);
  }

  addCarburant(carburant) {
    return this.http.post<any>(`${this.uri}/add`, carburant);
  }

  change(input: string) {
    const num = input.slice(1);
    let res = parseInt(num, 10);
    res++;
    const result = 'P' + res;
    return result;
  }

  updateIdentifiantPrix(id: string) {
    this.carburantService.getCarburantsList();
    const car = this.carburantService.carburants;
    console.log(car);
    const result = car.filter(x => x._id === id)[0];
    console.log(result);
    this.getCarburantList();
    const res = this.prixCarburants.filter(x => x.carburant === result.ref);
    let i;
    for (i = 0; i < res.length; i++) {
      res[i].identifiantPrix = this.change(res[i].identifiantPrix);
    }
    console.log(res);
    return this.http.put(`${this.uri}/updateList/`, res);
  }

  getPrix(input: string) {
    return this.http.get<any>(`${this.uri}/getPrix/${input}`);
  }

  getCarburantList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<PrixCarburant[]>(`${this.uri}/list`).subscribe((data: PrixCarburant[]) => {
      this.prixCarburants = data;
      let carburant: Carburant;
      this.prixCarburants.forEach((element: PrixCarburant) => {
        this.carburantService.getById(element.carburant).subscribe((res: Carburant) => {
          carburant = res;
          element.carburant = carburant.ref;
        });
      });


      this.prixCarburants = this.prixCarburants.reverse();
      this.carburantsMatTab.data = this.prixCarburants;
      if (sort) {
        this.carburantsMatTab.sort = sort;
      }
      if (paginator) {
        this.carburantsMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  editCarburant(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateCarburant(id, carburant) {
    return this.http.put(`${this.uri}/update/${id}`, carburant);
  }

  deletePrixCarburant(id) {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  /*getPrixCarburantListByName(carburant: string) {
    return this.http.get<any>(`${this.uri}/list/${carburant}`);
  }*/
  getCarburantByPrix(carburant: string) {
    return this.http.get<PrixCarburant[]>(`${this.uri}/list/carburantbyprix/${carburant}`);
  }
}
