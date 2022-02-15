import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }  //inyeccion del servicio

  buscarPais( termino: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    
    return this.http.get<Country[]>(url)
  }

  buscarCapital( termino: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>(url)
  }

  getPaisPorCodigo(id: string): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    
    return this.http.get<Country>(url);
  }
}
