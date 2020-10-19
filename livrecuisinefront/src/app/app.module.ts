import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { RecettesComponent } from './recettes/recettes.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { AjoutRecetteComponent } from './ajout-recette/ajout-recette.component';
import { AjoutIngredientComponent } from './ajout-ingredient/ajout-ingredient.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ModifIngredientComponent } from './modif-ingredient/modif-ingredient.component';
import { ModifRecetteComponent } from './modif-recette/modif-recette.component';
import { QuantiteComponent } from './quantite/quantite.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    DetailsComponent,
    HeaderComponent,
    RecettesComponent,
    IngredientsComponent,
    AjoutRecetteComponent,
    AjoutIngredientComponent,
    RechercheComponent,
    ModifIngredientComponent,
    ModifRecetteComponent,
    QuantiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
