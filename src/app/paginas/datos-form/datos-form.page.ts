import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; //importamos
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datos-form',
  templateUrl: './datos-form.page.html',
  styleUrls: ['./datos-form.page.scss'],
})
export class DatosFormPage implements OnInit {
  form: FormGroup;

  //declaramos la clase Alert como pública
  constructor(
    public alertController: AlertController,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      nombre: '',
      apellido: '',
      edad: '',
      fechaIncorporacion: '',
      sexo: 'nocontesta',
    });
  }

  ngOnInit() {}

  // Creamos e insertamos la clase Alerta aquí, usamos ialert

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atención',
      subHeader: 'Envío de datos',
      message: `
        <ul style="text-align: left;">
          <li>Nombre: ${this.form.value.nombre} </li>
          <li>Apellido: ${this.form.value.apellido}</li>
          <li>Edad: ${this.form.value.edad}</li>
          <li>Fecha de incorporación: ${this.form.value.fechaIncorporacion}</li>
          <li>Sexo: ${this.form.value.sexo}</li>
        <ul>
      `,
      buttons: ['OK'],
    });

    await alert.present();
  }

  onSubmit() {
    this.presentAlert();
    console.log(this.form.value);
  }
}
