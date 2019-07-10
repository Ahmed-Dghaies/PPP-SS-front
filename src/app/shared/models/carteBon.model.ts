export class CarteBon {

  constructor() {
    this.cardType = '';
    this.cardNumber = '';
    this.litreNumber = 0;
    this.clientCode = '';
    this.cardValue = 0;
    this.date = '';
  }

  public _id?: string;
  public cardType: string;
  public cardNumber: string;
  public litreNumber: number;
  public clientCode: string;
  public cardValue: number;
  public date: string;
}
