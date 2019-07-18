export class PayementCredit {

  constructor() {
    this.clientName = '';
    this.clientNumber = '';
    this.payementValue = 0;
    this.date = '';
  }

  public _id?: string;
  public clientNumber: string;
  public clientName: string;
  public payementValue: number;
  public date: string;
}
