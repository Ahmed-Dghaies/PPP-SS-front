export class ReleveIndex {
  constructor() {
    this.reference = '';
    this.depart = 0;
    this.arrive = 0;
    this.quantite = 0;
    this.prix = 0.0;
    this.pompiste = {
      _id: '',
      nom: ''
    };
  }
  public _id?: string;
  public reference: string;
  public depart: number;
  public arrive: number;
  public quantite: number;
  public prix: number;
  public pompiste: {
    _id: string,
    nom: string
  };
}
