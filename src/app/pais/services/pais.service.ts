import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.API_URL}/name/${termino}`);
  }

  buscarCapital(termino: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${environment.API_URL}/capital/${termino}`
    );
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    return this.http.get<Country>(`${environment.API_URL}/alpha/${id}`);
  }
}
