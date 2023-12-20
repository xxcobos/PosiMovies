import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

      //Atributo URL
      private URL = "https://posimovies-a0911-default-rtdb.firebaseio.com/" 

      //Inyección de dependencia del HttpClient
      constructor( private http: HttpClient) { }

  // Método con la petición HTTP GET
  getResponse(queryParams?: { [key: string]: string }): Observable<any> {
    let params = new HttpParams();
    if (queryParams) {
      Object.keys(queryParams).forEach(key => {
        params = params.append(key, queryParams[key]);
      });
    }
    return this.http.get<any>(this.URL , { params });
  }

}
