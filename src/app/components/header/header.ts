import { Component } from '@angular/core';
//se debe colocar @angular/router para que traiga todas las importaciones de la coleccion de rutas 
import {  RouterModule } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
