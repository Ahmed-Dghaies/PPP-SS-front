import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarteBonTypeService {

  private uri = 'https://ppp-ss.herokuapp.com/cardType'

  constructor(private _http: HttpClient) { }


  addCardType(cardType) {
    return this._http.post<any>(`${this.uri}/add`, cardType);
  }

  getCardTypes() {
    return this._http.get(`${this.uri}/list`);
  }

  editCardType(id) {
    return this._http.get(`${this.uri}/edit/${id}`);
  }

  updateCardType(id, cardType) {
    return this._http.put(`${this.uri}/update/${id}`, cardType);
  }

  deleteBusiness(id) {
    return this._http.delete(`${this.uri}/delete/${id}`);
  }
}
