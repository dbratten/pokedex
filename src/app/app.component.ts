import {Component} from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  private pokeName = 'http://pokeapi.co/api/v2/pokemon/';
  data: any = {};

  constructor(private http: Http) {
    console.log('Hello');
    this.getPokemon();
    this.getData();
  }

  getData() {
    return this.http.get(this.pokeName);
  }

  getPokemon() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

}

