export class Credit {

  constructor() {
    this.clientName = '';
    this.clientNumber = '';
    this.creditOriginalValue = 0;
    this.creditRestValue = 0;
    this.date = '';
  }

  public _id?: string;
  public clientNumber: string;
  public clientName: string;
  public creditOriginalValue: number;
  public creditRestValue: number;
  public date: string;
}
