import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  
  constructor() {
   
   }

   buscarHeroe(heroe: string){
    console.log("TERMINO: " + heroe);
  }
}
