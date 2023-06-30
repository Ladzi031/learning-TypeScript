"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes R${this.amount} for ${this.details}`;
    }
}
exports.Invoice = Invoice;
// readonly client: string;
// private details: string;
// private amount: number;
// constructor variable with access modifiers...
/*
        this.client = client;
        this.details = details;
        this.amount = amount;
         */
// access modifiers
// pubilc
// private
// readonly
