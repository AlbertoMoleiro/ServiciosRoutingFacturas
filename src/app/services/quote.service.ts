import { Injectable } from '@angular/core';
import { Quote } from '../_modelos/Quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
    private quotes: Quote[] = [
        new Quote(1, 21, 100),
        new Quote(2, 21, 200),
        new Quote(3, 21, 300)
    ];

  constructor() { }

  //methods addQuote, deleteQuote, updateQuote and getQuotes
    getQuotes(): Quote[] {
        return this.quotes;
    }

    addQuote(quote: Quote): void {
        this.quotes.push(quote);
    }

    deleteQuote(idQuote: number): void {
        this.quotes = this.quotes.filter(quote => quote.idQuote !== idQuote);
    }

    updateQuote(idQuote:number,idClient:number,iva:number,total:number) {
        this.quotes = this.quotes.map(quote => {
            if (quote.idQuote === idQuote) {
                quote.idClient = idClient;
                quote.iva = iva;
                quote.total = total;
            }
            return quote;
        });

    }


}
