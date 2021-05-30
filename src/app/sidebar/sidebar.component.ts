import { ServicioDeFavoritosService } from './../servicio-de-favoritos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private servicicoFavorito: ServicioDeFavoritosService) { }
  public listadeVideos:Array<any>=[];

  ngOnInit(): void {

    this.servicicoFavorito.disparadorDeFavoritos.subscribe(data=>{
      this.listadeVideos.push(data);
    })
  }

}
