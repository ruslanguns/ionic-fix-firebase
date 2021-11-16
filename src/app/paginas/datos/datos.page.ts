import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'; //importamos

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage {
  sexo = 'nocontesta';

  //declaramos la clase Alert como pública
  constructor(public alertController: AlertController) {}

  // Creamos e insertamos la clase Alerta aquí, usamos ialert

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atención',
      subHeader: 'Envío de datos',
      message: 'Sus datos han sido enviados para su matriculación.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
