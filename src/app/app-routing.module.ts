import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokedexMainComponent} from './pokedex-main/pokedex-main.component';
import {PokeViewComponent} from './poke-view/poke-view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokedex-main',
    pathMatch: 'full'
  },
  {
    path: 'pokedex-main',
    children: [],
    component: PokedexMainComponent
  },
  {
    path: 'poke-view/:id',
    children: [],
    component: PokeViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
