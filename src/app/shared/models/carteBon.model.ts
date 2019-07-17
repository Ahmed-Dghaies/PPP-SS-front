export class CarteBon {

  constructor() {
    this.cardType = '';
    this.cardValue = 0;
    this.numberOfCards = 0;
    this.totalValue = 0;
    this.date = '';
  }

  public _id?: string;
  public cardType: string;
  public cardValue: number;
  public numberOfCards: number;
  public totalValue: number;
  public date: string;
}
