import { Deserializable } from "./deserializable";
import { Quantite } from "./Quantite";


export class Ingredient implements Deserializable{

    //Attributs

    id:number;
    nom:string;
    typeIngr:string;

    quantites:Quantite[];

    deserialize(input:any){
        Object.assign(this, input);
        return this;
    }
}