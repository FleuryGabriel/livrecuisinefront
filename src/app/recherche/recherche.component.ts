import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Ingredient } from '../models/Ingredient';
import { Recette } from '../models/Recette';
import { IngredientService } from '../services/ingredient.service';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  cle:string;
  cle2:string;
  affiche:boolean = false;
  ingredient:Ingredient = new Ingredient();
  ingredients:Ingredient[] = new Array();
  recettes:Recette[] = new Array();

  constructor(private rt: Router, private iService: IngredientService, private rService:RecetteService) { }

  ngOnInit() {

    this.iService.getAllIngredient().subscribe(
      (data)=>{this.ingredients=data},
    (erreur)=>{console.log(erreur)});

  }

  rechCle(){
    this.rService.getRecetteByMotCle(this.cle).subscribe(
      data => {this.recettes = data}
    )

    this.affiche = true
  }

  rechIngr(){
    this.rService.getRecetteByIngredient(this.ingredient.id).subscribe(
      data => {
        this.recettes = data
      })
    this.affiche = true

    }

  reset(){
    this.affiche=false;
  }

}
