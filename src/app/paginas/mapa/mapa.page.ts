import { Component, OnDestroy } from '@angular/core';
import * as Leaflet from 'leaflet'; //importamos
import { antPath } from 'leaflet-ant-path';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnDestroy {
  rutasMapa = {
    casa: {
      name: 'Mesa y Lopez',
      lt: 28.135485148620003,
      ln: -15.429316282690367,
    },
    instituto: {
      name: 'IES El Rincón',
      lt: 28.128832781832685,
      ln: -15.44658639774398,
    },
    hermano: {
      name: 'Martín casa',
      lt: 28.114346486777738,
      ln: -15.439384809551491,
    },
    oficina: {
      name: 'Oficina',
      lt: 28.110328193566666,
      ln: -15.445817570208353,
    },
  };

  map: Leaflet.Map;
  rutaOrigen = this.rutasMapa.casa;
  rutaDestino = null;

  ionViewDidEnter() {
    this.leafletMap();
  }

  /* Coordenadas del IES El Rincón 28.128832781832685, -15.44658639774398 */
  /* Coordenadas de mi casa 28.135485148620003, -15.429316282690367 */

  leafletMap() {
    this.map = Leaflet.map('mapId').setView(
      [this.rutaOrigen.lt, this.rutaOrigen.ln],
      13
    );
    Leaflet.tileLayer(
      'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
    ).addTo(this.map);

    if (this.rutaDestino) {
      Leaflet.marker([this.rutaOrigen.lt, this.rutaOrigen.ln])
        .bindPopup(this.rutaOrigen.name)
        .openPopup()
        .addTo(this.map);
      Leaflet.marker([this.rutaDestino.lt, this.rutaDestino.ln])
        .bindPopup(this.rutaDestino.name)
        .openPopup()
        .addTo(this.map);

      antPath(
        [
          [this.rutaOrigen.lt, this.rutaOrigen.ln],
          [this.rutaDestino.lt, this.rutaDestino.ln],
        ],
        { color: '#FF0000', weight: 5, opacity: 0.6 }
      ).addTo(this.map);
    }
  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map.remove();
  }

  cambiarRuta(ruta: string) {
    this.rutaDestino = this.rutasMapa[ruta];
    this.map.remove();
    this.leafletMap();
    console.log('Ruta cambiada', this.rutasMapa[ruta]);
  }
}
