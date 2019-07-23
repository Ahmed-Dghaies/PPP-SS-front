export class Bank {

  constructor() {
    this.bankName = '';
    this.bankCode = 0;
    this.agencyName = '';
    this.agencyCode = 0;
    this.comptoir = 0;
    this.adress = '';
    this.tel = 0;
    this.responsibleName = '';
    this.dAgrem = '';
    this.dOuv = '';
    this.dFerm = '';
  }

  public _id?: string;
  public bankName: string;
  public bankCode: number;
  public agencyCode: number;
  public agencyName: string;
  public comptoir: number;
  public adress: string;
  public tel: number;
  public responsibleName: string;
  public dAgrem: string;
  public dOuv: string;
  public dFerm: string;

}
