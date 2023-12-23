import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';


 //Importación de la interfaz
 import { Interfaz } from '../../interfaces/interfaz';

 //Importación del servicio
 import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [PeliculasService],
})
export class FooterComponent {
    //Atributo con el tipo de dato de la interfaz
    public data : Interfaz[] = [];

    //Inyección de dependencia del servicio
    constructor(private dataProvider: PeliculasService) { }

    //Ejecución de la petición y suscripción de la respuesta

    ngOnInit() {
      this.dataProvider.getResponse().subscribe((response) => { 
        let dataArray = (response as Interfaz[]); 
        this.data = dataArray.slice(0,10);
      })
    }
}
