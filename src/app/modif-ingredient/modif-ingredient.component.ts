import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from '../models/Ingredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-modif-ingredient',
  templateUrl: './modif-ingredient.component.html',
  styleUrls: ['./modif-ingredient.component.css']
})
export class ModifIngredientComponent implements OnInit {

  ingredient:Ingredient = new Ingredient();

  constructor(private rt:Router, private iService:IngredientService, private ar:ActivatedRoute) { }

  ngOnInit(){
    this.ar.params.subscribe((pars)=>{
      let id = pars.pId;
      if(id!=undefined){
        this.iService.getIngredientById(id).subscribe((data)=>{this.ingredient=data})
      }
    })
  }

  modifIngr(){
    this.iService.updateIngredient(this.ingredient).subscribe((data)=>{
      this.rt.navigate(['ingredients']);
    },
      (erreur)=>{
        console.log(erreur);
      })
  }

}
