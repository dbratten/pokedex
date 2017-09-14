import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexMainComponent } from './pokedex-main/pokedex-main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokeViewComponent } from './poke-view/poke-view.component';
import {HttpModule} from '@angular/http';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    HttpModule,
    // NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
