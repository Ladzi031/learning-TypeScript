import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter{

    constructor(
        readonly recepient:string,
        private details:string,
        private amount:number){}

    format(){
        return `${this.recepient} is owed R${this.amount} for ${this.details}`;
    } 
}