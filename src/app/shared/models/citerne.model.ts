export class Citerne {
  constructor() {
    this.code = '';
    this.libelle = '';
    this.capacite = 0;
    this.carburant = '';
    this.tolerance = 0;
    this.stock = 0;
    this.ordre = 0;
    this.etat = 'actif';

  }
  public _id?: string;
  public code: string;
  public libelle: string;
  public capacite: number;
  public carburant: string;
  public tolerance: number;
  public stock: number;
  public ordre: number;
  public etat: string;

}
