import { Component, OnInit } from '@angular/core';
import { DatePipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonImg,
  IonCard,
  IonCardContent,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonRouterLink
} from '@ionic/angular/standalone';

interface Cita {
  id: number;
  nombre: string;
  fecha: string;
  hora: string;
  servicio: string;
  estado: 'programada' | 'completada' | 'cancelada';
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonImg,
    IonCard,
    IonCardContent,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    DatePipe,
    CommonModule
  ],
})
export class Tab3Page implements OnInit {
  filtroActivo: string = 'todas';
  
  // Sample data - replace with real data service
  todasLasCitas: Cita[] = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      fecha: '2024-08-15',
      hora: '10:00',
      servicio: 'Corte Clásico',
      estado: 'programada'
    },
    {
      id: 2,
      nombre: 'María García',
      fecha: '2024-08-14',
      hora: '14:30',
      servicio: 'Corte + Barba',
      estado: 'completada'
    }
  ];

  constructor() {}

  ngOnInit() {
    // Initialize component
  }

  get citasProximas(): Cita[] {
    return this.todasLasCitas.filter(cita => cita.estado === 'programada');
  }

  get citasCompletadas(): Cita[] {
    return this.todasLasCitas.filter(cita => cita.estado === 'completada');
  }

  get citasFiltradas(): Cita[] {
    switch (this.filtroActivo) {
      case 'proximas':
        return this.citasProximas;
      case 'completadas':
        return this.citasCompletadas;
      default:
        return this.todasLasCitas;
    }
  }

  formatDay(fecha: string): string {
    const date = new Date(fecha);
    return date.getDate().toString().padStart(2, '0');
  }

  formatMonth(fecha: string): string {
    const date = new Date(fecha);
    const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN',
                   'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    return months[date.getMonth()];
  }

  getStatusLabel(estado: string): string {
    const labels = {
      'programada': 'Programada',
      'completada': 'Completada',
      'cancelada': 'Cancelada'
    };
    return labels[estado as keyof typeof labels] || estado;
  }
  
}
