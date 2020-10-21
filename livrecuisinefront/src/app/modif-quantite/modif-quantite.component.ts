import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quantite } from '../models/Quantite';
import { QuantiteService } from '../services/quantite.service';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-modif-quantite',
  templateUrl: './modif-quantite.component.html',
  styleUrls: ['./modif-quantite.component.css']
})
export class ModifQuantiteComponent implements OnInit {

  quantite:Quantite = new Quantite();


  constructor(private qService:QuantiteService, private rt:Router, private ar:ActivatedRoute, private rService:RecetteService) { }

  ngOnInit(): void {

    this.ar.params.subscribe(
      pars => {
        let id = pars.pId;
        if(id!=undefined){
          this.qService.getQuantiteById(id).subscribe(
            data => {
              this.quantite=data
            }
          )
        }
      }
    )
  }


  modifQuantite(id:number){
    this.qService.updateQuantite(this.quantite).subscribe(
      response =>{
        if(response.status==200){
          this.rt.navigate(['/quantite', {pId:id}])          
        }
      }
    )
  }

}
