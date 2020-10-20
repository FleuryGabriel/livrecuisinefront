import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutIngredientComponent } from './ajout-ingredient/ajout-ingredient.component';
import { AjoutRecetteComponent } from './ajout-recette/ajout-recette.component';
import { CoursesComponent } from './courses/courses.component';
import { DetailsComponent } from './details/details.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ModifIngredientComponent } from './modif-ingredient/modif-ingredient.component';
import { ModifQuantiteComponent } from './modif-quantite/modif-quantite.component';
import { ModifRecetteComponent } from './modif-recette/modif-recette.component';
import { QuantiteComponent } from './quantite/quantite.component';
import { RecettesComponent } from './recettes/recettes.component';
import { RechercheComponent } from './recherche/recherche.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},

  {path: 'accueil', component:AccueilComponent},
  {path: 'details', component:DetailsComponent},
  {path: 'recettes', component:RecettesComponent},
  {path: 'ingredients', component:IngredientsComponent},
  {path: 'ajoutRecette', component:AjoutRecetteComponent},
  {path: 'recherche', component:RechercheComponent},
  {path: 'ajoutIngredient', component:AjoutIngredientComponent},
  {path: 'modifIngredient', component:ModifIngredientComponent},
  {path: 'modifRecette', component:ModifRecetteComponent},
  {path: 'quantite', component:QuantiteComponent},
  {path: 'recette', component:DetailsComponent},
  {path: 'quantite', component:QuantiteComponent},
  {path: 'courses', component:CoursesComponent},
  {path: 'modif-quantite', component:ModifQuantiteComponent},

  {path: '**', component:AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
