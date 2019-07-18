export class Client {
    constructor() {
        this.name = '';
        this.number = '';
        this.email = '';
        this.type = '';
        this.state = 'actif';
        this.matFisc = '';
        this.phone = null;
        this.plafondCredit = null;
        this.address = {
            city: '',
            postal: null
        };
        this.fax = null;
        this.region = '';
    }
    public _id?: string;
    public name: string;
    public number: string;
    public email: string;
    public type: string;
    public state: string;
    public matFisc: string;
    public phone: number;
    public plafondCredit: number;
    public address: {
        city: string,
        postal: number
    };
    public fax: number;
    public region: string;
}
