export class Cheque {

  constructor() {
    this.payeeName = '';
    this.date = '';
    this.chequeValue = 0;
    this.sessionId = '';
    this.state = '';
  }

  public _id?: string;
  public payeeName: string;
  public chequeNumber: string;
  public bankName: string;
  public chequeValue: number;
  public sessionId: string;
  public state: string;
  public rib: string;
  public agency: string;
  public date: string;


}
