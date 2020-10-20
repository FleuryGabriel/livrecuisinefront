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



}
