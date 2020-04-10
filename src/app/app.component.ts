import { Component } from '@angular/core';
import { resolve, resolve4 } from 'dns';
import { PromiseType } from 'protractor/built/plugins';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre2 = 'IgNcIO ferNANdeZ';

  nombre = 'Capitan america';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  porcentaje = 0.234;

  salario =  456;

  fecha: Date = new Date();

  activar = true;

  idioma = 'es';

  // tslint:disable-next-line: no-shadowed-variable
  valorPromesa = new Promise <string>( ( resolve ) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  } );

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };

  chEs() {
    this.idioma = 'es';
  }
  chFr() {
    this.idioma = 'fr';
  }
  chEn() {
    this.idioma = 'en';
  }

  activeOption() {
    this.activar = !this.activar;
  }

}
