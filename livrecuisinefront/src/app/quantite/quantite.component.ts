import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from '../models/Ingredient';
import { Quantite } from '../models/Quantite';
import { Recette } from '../models/Recette';
import { IngredientService } from '../services/ingredient.service';
import { RecetteService } from '../services/recette.service';
import { QuantiteService } from '../services/quantite.service';

@Component({
  selector: 'app-quantite',
  templateUrl: './quantite.component.html',
  styleUrls: ['./quantite.component.css']
})
export class QuantiteComponent implements OnInit {

  recette: Recette = new Recette();
  quantite: Quantite = new Quantite();
  ingredient: Ingredient = new Ingredient();
  ingredients: Ingredient[] = new Array();
  selected:Ingredient[];
  dose:number = 0;  
  affiche:boolean = false;

  constructor(private rt: Router, private ar: ActivatedRoute, private rService: RecetteService, 
    private iService: IngredientService, private qService: QuantiteService) { }

  ngOnInit(): void {

    this.ar.params.subscribe(
      pars => {
        let id = pars.pId;
        if (id!=undefined){
          this.rService.getRecetteById(id).subscribe(data=>{this.recette=data})
        }
      }
    )

    this.iService.getAllIngredient().subscribe(
      (data)=>{this.ingredients=data},
    (erreur)=>{console.log(erreur)});

    this.rService.getIngredients().subscribe(
      data => {this.selected=data},
      erreur => {console.log(erreur)}
    )


  }

  ajoutSimple(){
    this.quantite.ingredient=this.ingredient;
    this.quantite.recette=this.recette;
    this.quantite.no_ingredient=this.ingredient.nom;
    this.quantite.no_recette=this.recette.nom;
    this.selected.push(this.ingredient)
    this.qService.ajouterQuantite(this.quantite).subscribe(
      response => {
        if(response.status==200){
          history.go(0);
        }
      }
    )
  }

  valider(){
    
  }

  retirer(){

  }

}
