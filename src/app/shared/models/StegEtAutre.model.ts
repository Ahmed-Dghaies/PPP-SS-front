export class StegEtAutre {

  constructor() {
    this.cardNumber = '';
    this.clientName = '';
    this.clientNumber = '';
    this.carburant = '';
    this.chauffeur = '';
    this.literPrice = 0;
    this.numberOfCards = 0;
    this.numberOfLiters = 0;
    this.cardValue = 0;
    this.totalValue = 0;
    this.sessionId = '';
    this.date = '';
  }

  public _id?: string;
  public cardNumber: string;
  public clientNumber: string;
  public clientName: string;
  public chauffeur: string;
  public carburant: string;
  public numberOfLiters: number;
  public literPrice: number;
  public numberOfCards: number;
  public cardValue: number;
  public totalValue: number;
  public sessionId: string;
  public date: string;
}
