//Class Quote, private atributes _idQuote,_idClient, _iva, _total and getters and setters

export class Quote {
    private static idStatic: number = 0;
    private _idQuote: number;
    private _idClient: number;
    private _iva: number;
    private _total: number;

    constructor( idClient: number, iva: number, total: number) {
        this._idQuote = ++Quote.idStatic;
        this._idClient = idClient;
        this._iva = iva;
        this._total = total;
    }

    get idQuote(): number {
        return this._idQuote;
    }

    get idClient(): number {
        return this._idClient;
    }

    set idClient(value: number) {
        this._idClient = value;
    }

    get iva(): number {
        return this._iva;
    }

    set iva(value: number) {
        this._iva = value;
    }

    get total(): number {
        return this._total;
    }

    set total(value: number) {
        this._total = value;
    }


}
