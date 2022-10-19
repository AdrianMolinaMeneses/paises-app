import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  get params() {
    return new HttpParams().set(
      'fields',
      'name,capital,alpha2Code,flag,population'
    );
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.API_URL}/name/${termino}`, {
      params: this.params,
    });
  }

  buscarCapital(termino: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${environment.API_URL}/capital/${termino}`,
      {
        params: this.params,
      }
    );
  }

  buscarRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${environment.API_URL}/regionalbloc/${region}`,
      {
        params: this.params,
      }
    );
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    return this.http.get<Country>(`${environment.API_URL}/alpha/${id}`);
  }
}
