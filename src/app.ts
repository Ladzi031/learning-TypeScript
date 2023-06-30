import { Invoice } from "./classes/Invoice.js";
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

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    console.log(type1.value , tofrom.value , details.value , amount.valueAsNumber )
})


// classes
let inovice1 = new Invoice("james", "work on the james project", 234);
let inovice2 = new Invoice("mike", "work on the mike project", 500);


let invoiceArray: Invoice[] = [];
invoiceArray.push(inovice1);
invoiceArray.push(inovice2);

 // inovice1.client = "david"; // this is allowed... which might be a problem!

 // access modifiers
 // pubilc
 // private
 // readonly

 invoiceArray.forEach(inv => {
    console.log(inv.client, inv.format());
});
