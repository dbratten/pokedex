import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {
  }

  getPokemonList() {
    return this.http.get(`${environment.servicesUrl}/pokemon`)
      .map((data: any) => data.results)
      .catch(error => Observable.throw(error));
  }

  getPokemon(pokemonId) {
    return this.http.get(`${environment.servicesUrl}/pokemon/${pokemonId}`)
      .catch(error => Observable.throw(error));
  }
}
