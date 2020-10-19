import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Quantite} from '../models/Quantite'


@Injectable({
  providedIn: 'root'
})
export class QuantiteService {

  constructor(private http:HttpClient){}

  ajouterQuantite(q:Quantite){
      return this.http.post(URL+"/add/", q, {observe:'response'});
  }

  getAllQuantite():Observable<Quantite[]>{
      return this.http.get<Quantite[]>(URL+"/getAll");
  }

  getQuantiteById(id:number):Observable<Quantite>{
      return this.http.get<Quantite>(URL+"getById"+id);
  }

  updateQuantite(q:Quantite){
      return this.http.put(URL+"/update", q, {observe:'response'});
  }

  deleteQuantite(id:number){
      return this.http.delete(URL+"/delete"+id);
  }
}
