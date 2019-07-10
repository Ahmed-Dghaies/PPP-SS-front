export class BonValeur {

  constructor() {
    this.cardNumber = '';
    this.clientAdress = '';
    this.clientName = '';
    this.clientCode = '';
    this.cardValue = 0;
    this.date = '';
  }

  public _id?: string;
  public cardNumber: string;
  public clientCode: string;
  public clientName: string;
  public clientAdress: string;
  public cardValue: number;
  public date: string;
}
