import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quantite } from '../models/Quantite';
import { Recette } from '../models/Recette';
import { QuantiteService } from '../services/quantite.service';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  nb: number = 0;
  selected: Recette[] = new Array();
  recettes: Recette[] = new Array();
  quantitesTransfert: Quantite[] = new Array(); //Sert à passer les quantités de la recette à quantites dans genererListe()
  quantites: Quantite[] = new Array();
  affiche: boolean = false;
  generable: boolean = true;  //On évite que l'utilisateur ne génère la liste en boucle

  constructor(private rService: RecetteService, private qService: QuantiteService, private rt: Router, ar: ActivatedRoute) { }

  ngOnInit(): void {

    this.rService.getAllRecettes().subscribe(
      data => { this.recettes = data }
    )

  }

  arrayOne(n: number): number[] {
    return [...Array(n).keys()];
  }

  genererListe() {
    if (this.generable) {
      for (let r of this.selected) {
        this.qService.getQuantiteByRecette(r.id).subscribe(data => {
          this.quantitesTransfert = data
/*           this.quantites.push(this.quantitesTransfert[0]);
          this.quantites[0].dose = 0; */
          for(let t of this.quantitesTransfert){
            this.quantites.push(t);
          }
        })
        console.log(this.quantites)
        console.log(this.quantites.length)
        for(let i = 0; i<this.quantites.length; i++){
          for(let j = i+1; j<this.quantites.length; j++){
            console.log('avant le if')
            if(this.quantites[i].no_ingredient.localeCompare(this.quantites[j].no_ingredient)==0){
              console.log('conflit')
              //Donc si on entre si on a deux fois le même ingrédient dans la liste.
              if(this.quantites[i].unite.localeCompare(this.quantites[j].unite)==0){
                //Les deux doses ont la même unité.
                this.quantites[i].dose += this.quantites[j].dose;
              }else{
                //Les doses sont différentes
                this.quantites[i].unite = this.quantites[i].dose + this.quantites[i].unite + " + " + this.quantites[j].dose
                        + this.quantites[j].unite;
              }

              //Dans tous les cas, on enlève le doublon et on reinitialise la boucle for.
              delete this.quantites[j];
              i=0;

            }else{
              console.log('ingrédient différent')
            }

          }
        }


      }
    }

    this.generable=false;

  }
   

}


