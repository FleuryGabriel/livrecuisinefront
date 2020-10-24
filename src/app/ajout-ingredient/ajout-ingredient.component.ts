import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Ingredient} from 'src/app/models/Ingredient';
import {IngredientService} from 'src/app/services/ingredient.service'

@Component({
  selector: 'app-ajout-ingredient',
  templateUrl: './ajout-ingredient.component.html',
  styleUrls: ['./ajout-ingredient.component.css']
})
export class AjoutIngredientComponent implements OnInit {

  ingredient:Ingredient = new Ingredient();
  

  constructor(private rt:Router, private iService:IngredientService) { }

  ngOnInit() {
    
  }

  ajouterIngredient(){
    this.iService.ajouterIngredient(this.ingredient).subscribe((response)=>{
      if(response.status==200){
        this.rt.navigate(['ingredients']);
      }
    },
    (erreur)=>{
      console.log(erreur);
    })
  }
}
