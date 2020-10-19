import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Ingredient } from '../models/Ingredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  ingredients:Ingredient[];

  constructor(private rt:Router, private iService:IngredientService) { }

  ngOnInit(): void {

    this.iService.getAllIngredient().subscribe((data)=>{this.ingredients=data},(erreur)=>{console.log(erreur)});
  }

  supprimer(id:number) {
    this.iService.deleteIngredient(id).subscribe(
      (response) => {
        if(response.status==200){
          history.go(0);
        }else{
          Swal.fire({
            title : 'Erreur lors de la suppression',
            icon : 'error',
            showConfirmButton : false,
            timer : 1000
          })
        }
      },
      (erreur) => { console.log(erreur); }
    )
  }

}
