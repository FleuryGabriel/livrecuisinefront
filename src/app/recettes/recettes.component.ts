import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recette } from '../models/Recette';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {

  recettes:Recette[];

  constructor(private rt:Router, private rService:RecetteService) { }

  ngOnInit(): void {

    this.rService.getAllRecettes().subscribe(
      data => {this.recettes=data},
      erreur => {console.log(erreur)}
    )

  }

  supprimer(id:number){
    this.rService.deleteRecette(id).subscribe(
      response => {
        if(response.status==200){
          history.go(0);
        }
      }
    )
  }

}
