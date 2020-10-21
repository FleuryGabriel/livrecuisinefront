import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quantite } from '../models/Quantite';
import { Recette } from '../models/Recette';
import { QuantiteService } from '../services/quantite.service';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  recette:Recette = new Recette();
  allQuantite:Quantite[] = new Array();
  quantites:Quantite[] = new Array();

  constructor(private rService:RecetteService, private qService:QuantiteService, private rt:Router, private ar:ActivatedRoute) { }

  ngOnInit(): void {

    this.ar.params.subscribe(
      pars => {
        let id = pars.pId;
        if(id!=undefined){
          this.rService.getRecetteById(id).subscribe(
            data => {
              this.recette=data; //Dès qu'on sort du subscribe, recette est remis à 0. Je sais pas pourquoi, à creuser.

              this.qService.getQuantiteByRecette(this.recette.id).subscribe(data=>{
                this.quantites=data;
              })

            }
          )
        }
      }
    )
    



  }





}
