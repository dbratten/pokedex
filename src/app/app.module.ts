import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PokedexMainComponent} from './pokedex-main/pokedex-main.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PokeViewComponent} from './poke-view/poke-view.component';
import {PokemonService} from './pokemon.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokedexMainComponent,
    NavbarComponent,
    PokeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
