import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  numeroPremiado: number;

  constructor() {}

  ngOnInit() {}

  lanzarLoto(event: any) {
    setTimeout(() => {
      this.numeroPremiado = Math.floor(Math.random() * 100);
      event.target.complete();
    }, 2000);
  }
}
