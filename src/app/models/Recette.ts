
import { Deserializable } from './deserializable';
import { Quantite } from './Quantite';


export class Recette implements Deserializable{

    //Attributs

    id:number;
    nom:string;
    source:string;
    typePlat:string;
    lien:string;
    nbPersonnes:number;


    quantite:Quantite[];

    deserialize(input:any){
        Object.assign(this, input);
        return this;
    }


}