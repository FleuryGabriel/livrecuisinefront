import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Ingredient } from '../models/Ingredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  ingredient: Ingredient = new Ingredient();
  ingredients: Ingredient[];
  affiche: boolean = false;

  constructor(private rt: Router, private iService: IngredientService) { }

  ngOnInit() {

  }

  rechCle() {
    this.iService.getIngredientByMotCle(this.ingredient.cle).subscribe(
      (data) => {
        this.ingredients = data;
        this.affiche = true;
        this.ingredient = new Ingredient();
      },
      (erreur) => {
        console.log(erreur);
      })
  }

  rechId() {
    this.iService.getIngredientById(this.ingredient.id).subscribe(
      (data) => {
        this.ingredient = data;
        this.affiche = false;
      },
      (erreur) => {
        console.log(erreur);
      })

  }

  reset() {
    this.ingredients = new Array();
    this.affiche=false;
  }

  reset2() {
    this.ingredient = new Ingredient();
  }

  supprimer(id: number) {
    this.iService.deleteIngredient(id).subscribe(
      response => {
        console.log(response.status)
        if (response.status == 200) {
          this.rt.navigate(['/ingredients'])
        } else {
          Swal.fire({
            title: 'Erreur lors de la suppression',
            icon: 'error',
            showConfirmButton: false,
            timer: 1000
          })
        }
      }
    )
  }

}
