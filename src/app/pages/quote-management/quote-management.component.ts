import { QuoteService } from './../../services/quote.service';
import { Component } from '@angular/core';
import { Quote } from 'src/app/_modelos/Quote';


@Component({
    selector: 'app-quote-management',
    templateUrl: './quote-management.component.html',
    styleUrls: ['./quote-management.component.css']
})
export class QuoteManagementComponent {
    quotes: Quote[] = [];
    searchText: number = 0;
    show: boolean = false;
    showAdd: boolean = true;

    idQuoteSelect: number = 0;
    clientId: number = 0;
    iva: number = 0;
    total: number = 0;




    constructor(private quoteService: QuoteService) {
        this.quotes = quoteService.getQuotes();
    }

    showForm() {
        this.show = true;
    }

    hideForm() {
        this.show = false;
    }

    createQuote() {
        this.quoteService.addQuote(new Quote(this.clientId, this.iva, this.total));
        this.quotes = this.quoteService.getQuotes();
        this.hideForm();
    }

    deleteQuote(idQuote: number) {
        if (confirm(`¿Estás seguro de borrar la factura ${idQuote}?`)) {
            this.quoteService.deleteQuote(idQuote);
            this.quotes = this.quoteService.getQuotes();
        }
    }

    showUpdateForm(idQuote: number) {
        this.idQuoteSelect = idQuote;
        this.showForm();
        this.showAdd = false;
    }

    updateQuote() {
        this.quoteService.updateQuote(this.idQuoteSelect,this.clientId, this.iva, this.total);
        this.quotes = this.quoteService.getQuotes();
        this.idQuoteSelect  = 0;

        this.showAdd = true;
        this.hideForm();
    }





}
