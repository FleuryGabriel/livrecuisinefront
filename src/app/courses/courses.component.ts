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
  listeNoms: string[] = new Array()
  affiche: boolean = false;
  generable: boolean = true;  //On évite que l'utilisateur ne génère la liste en boucle
  personnes: number[] = new Array();
  result: Quantite[] = new Array();

  constructor(private rService: RecetteService, private qService: QuantiteService, private rt: Router, ar: ActivatedRoute) { }

  ngOnInit(): void {

    this.rService.getAllRecettes().subscribe(
      data => { this.recettes = data }
    )

  }

  arrayOne(n: number): number[] {
    return [...Array(n).keys()];
  }

  reset() {
    history.go(0);
  }

  genererListe() {

    //On récupère les recettes sélectionnées et leurs quantités.
    for (let r of this.selected) {
      this.qService.getQuantiteByRecette(r.id).subscribe(data => {
        this.quantitesTransfert = data

        //On prends en compte le nombre de personne pour chaque recette:
        //On récupère la position de la recette dans le tableau selected
        let position: number = this.selected.findIndex(rec => rec.id == r.id)

        //On verifie que le nombre de personne de la recette est égal à celui indiqué par l'utilisateur, 
        //                                                                              sinon on adapte les doses
        for (let t of this.quantitesTransfert) {

          if (this.selected[position].nbPersonnes != this.personnes[position]) {
            let coef: number = this.personnes[position] / this.selected[position].nbPersonnes;
            t.dose = t.dose * coef;
          }

          if (t.dose != 0) {
            this.quantites.push(t);
          }
        }


        //On vérifie qu'il n'y ait pas de doublons. Si c'est le cas on additionne les quantités. 
        for (let i = 0; i < this.quantites.length; i++) {
          for (let j = i + 1; j < this.quantites.length; j++) {
            if (this.quantites[i].no_ingredient.localeCompare(this.quantites[j].no_ingredient) == 0) {
              //Donc si on entre si on a deux fois le même ingrédient dans la liste.
              if (this.quantites[i].unite.localeCompare(this.quantites[j].unite) == 0) {
                //Les deux doses ont la même unité.
                this.quantites[i].dose += this.quantites[j].dose;
              } else {
                //Les doses sont différentes
                console.log(this.quantites[i].unite)
                this.quantites[i].unite += " + " + this.quantites[j].dose + " " + this.quantites[j].unite;
              }

            }
          }
        }

        //On récupère les noms des ingrédents des quantités
        for (let q of this.quantites) {
          this.listeNoms.push(q.no_ingredient);
        }

        //On retire les doublons de cette liste
        this.listeNoms = [...new Set(this.listeNoms)];

        /*On met dans le résultat les quantités dont le nom d'ingrédient apparaît. 
        Comme la listeNoms est plus courte et qu'on break, ça enlève les ingédients doubles.*/
        for (let n of this.listeNoms) {
          for (let q of this.quantites) {
            if (q.no_ingredient.localeCompare(n) == 0) {
              this.result.push(q);
              break;
            }
          }
        }

        this.result = [...new Set(this.result)];

      })
    }
    this.generable = false;
  }


}


