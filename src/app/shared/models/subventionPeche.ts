export class SubventionPeche {

  constructor() {
    this.payeeName = '';
    this.cardNumber = 0;
    this.motorPower = 0;
    this.boatName = '';
    this.numberOfLiters = 0;
    this.cardValue = 0;
    this.literPrice = 0;
    this.sessionId = '';
    this.state = '';
    this.date = '';
  }
  public _id?: string;
  public cardNumber: number;
  public payeeName: string;
  public motorPower: number;
  public boatName: string;
  public numberOfLiters: number;
  public cardValue: number;
  public literPrice: number;
  public sessionId: string;
  public state: string;
  public date: string;
}
