import { Injectable } from '@angular/core';

//Importación del HttpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

      //Atributo URL
      private URL: "https://posimovies-a0911-default-rtdb.firebaseio.com/"

      //Inyección de dependencia del HttpClient
      constructor( ... ) { }

      //Método con la petición HTTP
      getResponse() {
          return this.http.get(this.URL);
      }

}
