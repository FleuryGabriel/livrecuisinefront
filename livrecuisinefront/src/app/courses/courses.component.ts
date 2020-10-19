import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quantite } from '../models/Quantite';
import { Recette } from '../models/Recette';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
  nb:number=0;
  recettes:Recette[] = new Array();
  recette1:Recette = new Recette();
  recette2:Recette = new Recette();
  recette3:Recette = new Recette();
  recette4:Recette = new Recette();
  recette5:Recette = new Recette();
  recette6:Recette = new Recette();
  recette7:Recette = new Recette();
  recette8:Recette = new Recette();
  recette9:Recette = new Recette();
  recette10:Recette = new Recette();
  recette11:Recette = new Recette();
  recette12:Recette = new Recette();
  recette13:Recette = new Recette();
  recette14:Recette = new Recette();

  quantites:Quantite[] = new Array();

  constructor(private rService:RecetteService, private rt:Router, ar:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
