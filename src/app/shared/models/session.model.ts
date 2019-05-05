export class Session {
  constructor() {
      this.date = new Date();
      this.poste = '';
      this.description = '';
      this.state = 'Open';
  }
  public _id?: string;
  public date: Date;
  public poste: string;
  public description: string;
  public state: string;
  public personnes: [
    {
      _id?: string,
      id_pompiste: string,
      nom_pompiste: string,
      heures_pres: number
    }
  ];
}
