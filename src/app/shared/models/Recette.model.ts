import { IndexVM } from './view_models/IndexVM.model';

export class Recette {
  constructor() {
      this.date = new Date();
      this.poste = '';
      this.rIndex = [];
  }
  public _id?: string;
  public date: Date;
  public poste: string;
  public rIndex: IndexVM[];
}
