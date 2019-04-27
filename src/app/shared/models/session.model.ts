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
}
