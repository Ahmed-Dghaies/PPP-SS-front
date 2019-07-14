export class Cheque {

  constructor() {
    this.payeeName = '';
    this.date = '';
    this.chequeValue = 0;
  }

  public _id?: string;
  public payeeName: string;
  public chequeNumber: string;
  public bankName: string;
  public date: string;
  public chequeValue: number;

}
