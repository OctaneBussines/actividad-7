# actividad-7

<img width="358" height="762" alt="image" src="https://github.com/user-attachments/assets/a7128b2a-52d9-4790-9f34-8fd122171775" />

<img width="358" height="762" alt="image" src="https://github.com/user-attachments/assets/6691c6c4-52f7-499c-a785-4d3d96360796" />

<img width="358" height="762" alt="image" src="https://github.com/user-attachments/assets/c0b8e4db-4f5c-468c-901e-f0de04bef017" />

<img width="358" height="762" alt="image" src="https://github.com/user-attachments/assets/ba187f9c-d967-4ba7-b1c2-70a4343174c6" />

<img width="358" height="762" alt="image" src="https://github.com/user-attachments/assets/f5ca57ae-59dd-4862-9d03-2c42b8573e63" />

1️⃣ Estructura general del proyecto

Tu proyecto tiene varias partes principales:

src/
 ├─ app/
 │   ├─ tab2/
 │   │   ├─ tab2.page.html
 │   │   ├─ tab2.page.scss
 │   │   ├─ tab2.page.ts
 │   ├─ tab3/
 │   │   ├─ tab3.page.html
 │   │   ├─ tab3.page.scss
 │   │   ├─ tab3.page.ts
 │   ├─ services/
 │   │   ├─ citas.service.ts


Tab2 → Formulario de agendar cita.

Tab3 → Lista de “Mis Citas”.

CitasService → Servicio central que guarda y distribuye las citas.

3️⃣ tab2.page.ts (Agendar citas)

Flujo de Tab2:

Usuario llena el formulario (nombre, correo, fecha, hora, servicio).

Al presionar “Agendar Cita”, se crea un objeto Cita con:

id: Date.now().toString() → ID único.

usuarioId: el correo (o un valor por defecto).

fecha, hora, descripcion: datos del formulario.

estado: 'programada'.

Se llama a CitasService.crearCita() para guardar la cita.

Se muestra una alerta de confirmación con los datos de la cita.

Se limpia el formulario para una nueva entrada.

Esto garantiza que cada cita ingresada queda almacenada en el servicio, lista para Tab3.

4️⃣ tab3.page.ts (Visualizar citas)

Flujo de Tab3:

Al iniciar la página (ngOnInit()), se suscribe al observable de CitasService.obtenerCitas().

Cada vez que se agrega una cita desde Tab2, el observable se dispara y actualiza todasLasCitas.

Se calculan automáticamente:

citasProximas → filtrando por estado === 'programada'.

citasCompletadas → filtrando por estado === 'completada'.

Se puede filtrar por “Todas”, “Próximas” o “Completadas” usando filtroActivo.

Se muestran las citas en la interfaz HTML con:

Fecha y mes.

Estado (programada, completada, cancelada).

Servicio y nombre del usuario.

Importante: gracias al observable, Tab3 siempre está actualizado con cualquier cita agendada en Tab2.

5️⃣ Flujo completo en la app
Usuario Tab2 → Ingresa datos → Presiona Agendar
          ↓
   Tab2 crea objeto Cita
          ↓
   Servicio CitasService → guarda y emite observable
          ↓
   Tab3 suscrito al observable → se actualiza lista de citas

6️⃣ Cómo agregar persistencia futura

Si quieres guardar las citas de forma permanente (por ejemplo, SQLite o Firebase):

Modificar CitasService para guardar las citas en localStorage o en backend.

Al iniciar la app, cargar las citas guardadas en el array y en el BehaviorSubject.

El resto del flujo no cambia; Tab3 seguirá recibiendo actualizaciones automáticamente.

Sistema de Reservas de Citas - Ionic + Firebase

Este proyecto es una aplicación móvil híbrida desarrollada con Ionic que permite a los usuarios agendar, gestionar y visualizar sus citas. La información se almacena en Firebase Firestore, lo que permite sincronización en tiempo real.

📌 Requisitos Previos

Node.js y npm instalados

Ionic CLI instalado (npm install -g @ionic/cli)

Cuenta de Firebase

Editor de código (VS Code recomendado)

🛠️ Configuración del Proyecto

Clonar el repositorio:

git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>


Instalar dependencias:

npm install


Configurar Firebase:

Crear un proyecto en Firebase Console
.

Agregar una aplicación web dentro del proyecto.

Copiar la configuración de Firebase (apiKey, authDomain, etc.).

Habilitar Firestore Database en modo de prueba (solo para desarrollo).

Integrar Firebase en el proyecto Ionic:

Crear un archivo de configuración con los datos de Firebase.

Inicializar Firebase y Firestore al inicio de la aplicación.

📝 Funcionamiento de la Aplicación
Tab 1 - Inicio

Pantalla de bienvenida o menú principal.

Acceso a otras secciones de la aplicación.

Tab 2 - Agendar Cita

Formulario donde el usuario puede ingresar:

Nombre, correo, teléfono

Fecha y hora de la cita

Servicio deseado y comentarios adicionales

Al enviar el formulario:

La cita se guarda en Firebase Firestore.

Se muestra un mensaje de confirmación al usuario.

El formulario se reinicia para nuevas entradas.

Tab 3 - Mis Citas

Visualización de todas las citas almacenadas en Firebase.

Se muestran estadísticas:

Total de citas

Próximas citas

Citas completadas

Filtrado por estado:

Todas

Próximas

Completadas

La lista se actualiza en tiempo real cuando se agregan nuevas citas desde Tab 2.

⚡ Características Principales

Sincronización en tiempo real con Firebase Firestore.

Filtrado y organización de citas por estado.

Interfaz amigable con Ionic y componentes visuales.

Mensajes de confirmación al agendar citas.

Formularios validados y limpios después de cada envío.

🚀 Para Ejecutar la Aplicación

Abrir un terminal en la carpeta del proyecto.

Ejecutar:

ionic serve


Abrir la app en un navegador o dispositivo móvil conectado.

🔒 Seguridad y Producción

Para producción, configurar reglas de Firestore para permitir solo acceso autenticado.

Validar formularios antes de enviar los datos.

Mantener las credenciales de Firebase en un archivo seguro.

Este README sirve como guía paso a paso para configurar y ejecutar tu aplicación de citas con Ionic y Firebase
