import { Injectable } from '@angular/core';
 //Importación del HttpClient
 import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ServicioService {

  private URL: string = 'https://posimovies-a0911-default-rtdb.firebaseio.com/collection.json';


    //Inyección de dependencia del HttpClient
    constructor(private http:HttpClient) { }

    getResponse() {
      return this.http.get(this.URL);
  }
}
