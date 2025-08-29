import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonButton,
  IonIcon,
  AlertController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonButton,
    IonIcon,
    FormsModule
  ],
})
export class Tab2Page {
  cita = {
    nombre: '',
    correo: '',
    telefono: '',
    fecha: '',
    hora: '',
    servicio: '',
    comentarios: ''
  };

  constructor(private alertCtrl: AlertController) {}

  async agendarCita() {
    console.log('Cita agendada:', this.cita);

    const alert = await this.alertCtrl.create({
      header: '✅ Cita Confirmada',
      message: `
        <p><b>Nombre:</b> ${this.cita.nombre}</p>
        <p><b>Correo:</b> ${this.cita.correo}</p>
        <p><b>Teléfono:</b> ${this.cita.telefono}</p>
        <p><b>Fecha:</b> ${this.cita.fecha}</p>
        <p><b>Hora:</b> ${this.cita.hora}</p>
        <p><b>Servicio:</b> ${this.cita.servicio}</p>
      `,
      buttons: ['OK']
    });

    await alert.present();

    // Opcional: reiniciar formulario
    this.cita = { nombre: '', correo: '', telefono: '', fecha: '', hora: '', servicio: '', comentarios: '' };
  }
}
