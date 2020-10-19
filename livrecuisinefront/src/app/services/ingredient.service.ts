import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Ingredient} from '../models/Ingredient'

const URL = "http://localhost:8081/rest/ingredient";

@Injectable({
    providedIn: 'root'
  })
export class IngredientService{

    constructor(private http:HttpClient){}

    ajouterIngredient(i:Ingredient){
        return this.http.post(URL+"/add/", i, {observe:'response'});
    }

    getAllIngredient():Observable<Ingredient[]>{
        return this.http.get<Ingredient[]>(URL+"/getAll");
    }

    getIngredientById(id:number):Observable<Ingredient>{
        return this.http.get<Ingredient>(URL+"/getById/"+id);
    }

    updateIngredient(i:Ingredient){
        return this.http.put(URL+"/update/", i, {observe:'response'});
    }

    deleteIngredient(id:number){
        return this.http.delete(URL+"/del/"+id, {observe : 'response'});
    }

    getIngredientByMotCle(cle:string){
        return this.http.get<Ingredient[]>(URL+"/getCle/"+cle)
    }
}