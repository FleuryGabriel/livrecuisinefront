import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Recette} from '../models/Recette'
import { Ingredient } from '../models/Ingredient';

const URL = "http://localhost:8081/rest/recette/";

@Injectable({
    providedIn: 'root'
  }) 
export class RecetteService{

    constructor(private http:HttpClient){}

    ajouterRecette(r:Recette){
        return this.http.post(URL+"add", r, {observe:'response'});
    }

    getAllRecettes():Observable<Recette[]>{
        return this.http.get<Recette[]>(URL+"getAll");
    }

    getRecetteById(id:number):Observable<Recette>{
        return this.http.get<Recette>(URL+"getById/"+id);
    }

    updateRecette(r:Recette){
        return this.http.put(URL+"update", r, {observe:'response'});
    }

    deleteRecette(id:number){
        return this.http.delete(URL+"del/"+id, {observe: 'response'});
    }

    getIngredients():Observable<Ingredient[]>{
        return this.http.get<Ingredient[]>(URL+"ingr");
    }
}