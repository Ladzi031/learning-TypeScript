import { HasFormatter } from "../interfaces/HasFormatter";
export class ListTemplate {

    public constructor( private contaner: HTMLUListElement){
        
    }

     display (item: HasFormatter, heading: string) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        
        this.contaner.append(li);
        
    }

}