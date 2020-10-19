import { Deserializable } from "./deserializable";
import { Recette } from "./Recette";
import { Ingredient } from "./Ingredient";


export class Quantite implements Deserializable{

    //Attributs

    id:number;
    no_recette:string;
    no_ingredient:string;
    dose:number;
    unite:string;

    recette:Recette;
    ingredient:Ingredient;

    deserialize(input:any){
        Object.assign(this,input);
        this.recette=new Recette().deserialize(input.recette);
        this.ingredient= new Ingredient().deserialize(input.recette);
        return this;
    }

}