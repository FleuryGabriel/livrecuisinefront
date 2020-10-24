import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recette } from '../models/Recette';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-modif-recette',
  templateUrl: './modif-recette.component.html',
  styleUrls: ['./modif-recette.component.css']
})
export class ModifRecetteComponent implements OnInit {

  recette:Recette = new Recette();

  constructor(private rt:Router, private ar:ActivatedRoute, private rService:RecetteService) { }

  ngOnInit(){
    this.ar.params.subscribe((pars)=>{
      let id = pars.pId;
      if(id!=undefined){
        this.rService.getRecetteById(id).subscribe((data)=>{this.recette=data})
        console.log(this.recette)
      }
    })
  }

  modifier(){
    this.rService.updateRecette(this.recette).subscribe(
      data => {this.rt.navigate(['/recettes'])}
    )
  }

}
