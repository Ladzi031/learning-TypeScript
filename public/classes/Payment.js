export class Payment {
    recepient;
    details;
    amount;
    constructor(recepient, details, amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recepient} is owed R${this.amount} for ${this.details}`;
    }
}
