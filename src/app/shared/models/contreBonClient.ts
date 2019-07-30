export class ContreBonClient {

  constructor() {
    this.cardNumber = 0;
    this.cardValue = 0;
    this.type = '';
    this.sessionId = '';
    this.date = '';
  }

  public _id?: string;
  public cardNumber: number;
  public cardValue: number;
  public type: string;
  public sessionId: string;
  public date: string;
}
