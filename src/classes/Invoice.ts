import { HasFormatter } from "../interfaces/HasFormatter";

export class Invoice implements HasFormatter{

    constructor(
        readonly client:string,
        private details:string,
        private amount:number){}

    format(){
        return `${this.client} owes R${this.amount} for ${this.details}`;
    }
}

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

