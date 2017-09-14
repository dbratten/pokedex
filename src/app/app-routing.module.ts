import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokedexMainComponent} from "./pokedex-main/pokedex-main.component";
import {PokeViewComponent} from "./poke-view/poke-view.component";


const routes: Routes = [
  // {
  //   path: '',
  //   children: []
  // },
  {
    path: '',
    children: [],
    component: PokedexMainComponent
  },
  {
    path: 'pokedex',
    children: [],
    component: PokedexMainComponent
  },
  {
    path: 'poke-view',
    children: [],
    component: PokeViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
