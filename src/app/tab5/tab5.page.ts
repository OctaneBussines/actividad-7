import { Component, OnInit } from '@angular/core';
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
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
  IonSelect,
  IonSelectOption,
  IonToggle,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
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
    IonItem,
    IonLabel,
    IonInput,
    IonDatetime,
    IonSelect,
    IonSelectOption,
    IonToggle,
    IonButton,
    IonIcon,
    FormsModule
  ],
})
export class Tab5Page implements OnInit {

  usuario = {
    nombre: 'Juan Carlos Pérez',
    correo: 'juan.perez@email.com',
    telefono: '+57 300 123 4567',
    fechaNacimiento: '1990-05-15',
    barberoFavorito: 'carlos'
  };

  preferencias = {
    notificaciones: true,
    emailMarketing: false,
    modoOscuro: true
  };

  constructor() { }

  ngOnInit() {
  }

  guardarPerfil() {
    console.log('Perfil guardado:', this.usuario, this.preferencias);
    // Aquí implementarías la lógica para guardar los datos
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');
    // Aquí implementarías la lógica para cerrar sesión
  }
}