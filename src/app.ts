import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter; // mindfull of the type here!

 docOne = new Invoice("yoshi", "web work", 250);
 docTwo = new Payment("mario", "plumbing work", 200);

 let docs: HasFormatter[] = [];
 docs.push(docOne);
 docs.push(docTwo)
 //docs.forEach(el => console.log(el.format()));

/*

console.log(anchor2.href); // results in an error because the element might not exists in the DOM in the first place!

const anchor = document.querySelector('a')!; // exclamation mark tells tsc that we are certain that the anchor element exists in the DOM...
const anchor2 = document.querySelector("a"); // anchor2 data type is HTMLAnchorElement | null
// console.log("testing!");
*/

const form = document.querySelector(".new-item-form") as HTMLFormElement; //for intellisense to know...
//console.log(form.children);

const type1 = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if(type1.value === "invoice"){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type1.value, "end");
})


// classes
let inovice1 = new Invoice("james", "work on the james project", 234);
let inovice2 = new Invoice("mike", "work on the mike project", 500);


let invoiceArray: Invoice[] = [];
invoiceArray.push(inovice1);
invoiceArray.push(inovice2);

 
/*  invoiceArray.forEach(inv => {
    console.log(inv.client, inv.format());
}); */
 

// interfaces...
interface IsPerson {
    name: string,
    age: number,

    //more like a function signature here...
    speak(a: string):void,
    spend(a: number): number    
}

const someone: IsPerson = {
    name:"luigi",
    age: 34,
    speak(text: string):void {
        console.log(text);
    },
    spend(amount:number):number {
        console.log(amount);
        return amount;
    }
}
const greetPerson = (person: IsPerson): void => {
    console.log("hello ", person.name);
}
greetPerson(someone);