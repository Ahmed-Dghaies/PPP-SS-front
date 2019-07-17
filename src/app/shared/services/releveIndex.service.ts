import { Injectable } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { IndexVM } from '../models/view_models/IndexVM.model';
import { HttpClient } from '@angular/common/http';
import { Index } from '../models/Index.model';
import { Observable } from 'rxjs';
import { ReleveIndex } from '../models/ReleveIndex.model';
import { PrixCarburant } from '../models/prixcarburant';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ReleveIndexService {

  public releveIndexs: IndexVM[];
  public releveIndexsMatTab: MatTableDataSource<any>;
  public list: string[];
  public indexs: Index[];
  public pompistes: any[];
  public listReleveIndexs: ReleveIndex[];

  private uri = 'https://ppp-ss.herokuapp.com/recette';
  private indexUri = 'https://ppp-ss.herokuapp.com/index';
  private sessionUri = 'https://ppp-ss.herokuapp.com/session';

  constructor(
    private http: HttpClient,
    private notifService: NotificationService) {
    this.releveIndexs = [];
    this.list = [];
    this.indexs = [];
    this.pompistes = [];
    this.releveIndexsMatTab = new MatTableDataSource(this.releveIndexs);
    this.listReleveIndexs = [];
  }

  getDatePoste = () => {
    const datetime = new Date();
    let date = datetime.toISOString().slice(0, 10);
    const hour = datetime.getHours();
    const dd = new Date(datetime.setDate(datetime.getDate() - 1));
    const yesterday = dd.toISOString().slice(0, 10);
    let poste = '';
    if ((hour >= 6) && (hour < 14)) {
      poste = 'P1';
    } else if ((hour >= 14) && (hour < 22)) {
      poste = 'P2';
    } else if ((hour === 22) || (hour === 23)) {
      poste = 'P3';
    } else if ((hour >= 0) && (hour < 6)) {
      poste = 'P3'; date = yesterday;
    }
    return date.concat(poste);
  }

  assignIndexs(pompisteVM: any, sessionId: string, indexs: Index[], prixCarburant: PrixCarburant[]): void {
    const pompiste = {
      _id: pompisteVM.id_pompiste,
      nom: pompisteVM.nom_pompiste
    };
    for (let _i = 0; _i < pompisteVM.indexs.length; _i++) {
      this.listReleveIndexs[_i] = new ReleveIndex();
      this.listReleveIndexs[_i].reference = pompisteVM.indexs[_i];
      this.listReleveIndexs[_i].pompiste = pompiste;
      const res = indexs.filter(x => x.reference === pompisteVM.indexs[_i]);
      this.listReleveIndexs[_i].depart = res[0].valeurIndex;
      this.listReleveIndexs[_i].arrive = res[0].valeurIndex;
      const carburantPrice = prixCarburant.filter(x => x.carburant === res[0].carburant).filter(x => x.identifiantPrix === 'P1');
      this.listReleveIndexs[_i].prix = carburantPrice[0].prix;
    }

    this.addMultipleReleveIndex(this.listReleveIndexs).subscribe(
      res => {
        this.getReleveIndexsList(sessionId);
        this.notifService.success('relevé index ajouter avec succés');
      },
      err => {
        console.log(err);
        this.notifService.warn('Erreur');
      }
    );

  }

  addReleveIndex(releveIndex) {
    return this.http.post<any>(`${this.uri}/addReleveIndex`, releveIndex);
  }

  addMultipleReleveIndex(releveIndex) {
    return this.http.post<any>(`${this.uri}/addMultipleReleveIndex`, releveIndex);
  }

  getReleveIndexsList(currentId: string, sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<IndexVM[]>(`${this.uri}/listReleveIndex/${currentId}`).subscribe((data: IndexVM[]) => {
      this.releveIndexs = data;
      this.releveIndexs = this.releveIndexs.reverse();
      this.releveIndexsMatTab.data = this.releveIndexs;
      if (sort) {
        this.releveIndexsMatTab.sort = sort;
      }
      if (paginator) {
        this.releveIndexsMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  clear() {
    this.releveIndexs = [];
    this.releveIndexsMatTab.data = [];
  }

  getIndexsNames(): void {
    this.list = [];
    this.http.get<Index[]>(`${this.indexUri}/list`).subscribe((data: Index[]) => {
      this.indexs = data;
      let i;
      for (i = 0; i < this.indexs.length; i++) {
        this.list.push(this.indexs[i].reference);
      }
    },
      err => {
        console.log(err);
      });
  }

  getSessionPompiste(): void {
    this.http.get(`${this.sessionUri}/get-session-pompiste`).subscribe(res => {
      const key = 'pompistes';
      this.pompistes = res[key].map(p => {
        return {
          _id: p._id,
          nom: p.nom_pompiste
        };
      });
    },
      err => {
        console.log(err);
      });
  }

  editReleveIndex(id) {
    return this.http.get(`${this.uri}/editReleveIndex/${id}`);
  }

  updateReleveIndex(id, index) {
    return this.http.put(`${this.uri}/updateReleveIndex/${id}`, index);
  }

  deleteReleveIndex(id) {
    return this.http.delete(`${this.uri}/deleteReleveIndex/${id}`);
  }


  // get total revenue
  getTotlaRevenue(): Observable<any> {
    const month = new Date().getMonth() + 1;
    return this.http.get(`${this.uri}/totalRevenue?month=${month}`);
  }

  // get quantité carburant
  getQuantiteCarburant(): Observable<any> {
    const month = new Date().getMonth() + 1;
    return this.http.get(`${this.uri}/quantiteCarburant?month=${month}`);
  }
}
