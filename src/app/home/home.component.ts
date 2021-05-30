import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public listadeVideos: any = []
  constructor(private RestService: RestService) { }

  ngOnInit(): void {
    this.cargarData();
    this.listadeVideos = [];

  }
  public cargarData() {
    this.RestService.get('https://mocki.io/v1/8c2e85bc-9471-471b-8c60-eb96c4869496').subscribe(respuesta => {
      this.listadeVideos = respuesta;
    }
    )
  }
}
