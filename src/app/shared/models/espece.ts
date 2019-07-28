export class Espece {
  constructor() {
    this.type = 0;
    this.quantity = 0;
    this.totalValue = 0;
    this.sessionId = '';
    this.state = '';
  }
  public _id?: string;
  public type: number;
  public quantity: number;
  public totalValue: number;
  public sessionId: string;
  public state: string;
}
