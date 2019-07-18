export class CarteBon {

  constructor() {
    this.cardType = '';
    this.cardValue = 0;
    this.numberOfCards = 0;
    this.totalValue = 0;
    this.sessionId = '';
    this.state = '';
    this.date = '';
  }

  public _id?: string;
  public cardType: string;
  public cardValue: number;
  public numberOfCards: number;
  public totalValue: number;
  public sessionId: string;
  public state: string;
  public date: string;
}
