export class IndexVM {
  constructor() {
    this.reference = '';
    this.citerne = '';
    this.depart = 0;
    this.arrive = 0;
    this.quantite = 0;
    this.prix = 0.0;
    this.prevue = 0.0;

  }
  public _id?: string;
  public reference: string;
  public citerne: string;
  public depart: number;
  public arrive: number;
  public quantite: number;
  public prix: number;
  public prevue: number;

}
