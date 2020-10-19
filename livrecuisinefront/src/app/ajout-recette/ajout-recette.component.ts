import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recette } from '../models/Recette';
import {RecetteService} from 'src/app/services/recette.service'

@Component({
  selector: 'app-ajout-recette',
  templateUrl: './ajout-recette.component.html',
  styleUrls: ['./ajout-recette.component.css']
})
export class AjoutRecetteComponent implements OnInit {

  recette:Recette = new Recette();

  constructor(private rt:Router, private rService:RecetteService) { }

  ngOnInit(): void {
  }

  ajouter(){
    this.rService.ajouterRecette(this.recette).subscribe(
      response => {this.rt.navigate(['/recettes'])},
      erreur => console.log(erreur)
    )
  }

}
