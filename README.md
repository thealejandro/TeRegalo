# TeRegalo

Prototipo de sistema de tarjetas de regalo construido como prueba técnica para la empresa LucaSafe, con stack PEAN (PostgreSQL, Express, Angular, Node).

## Contexto

- Año: 2020.
- Prueba técnica realizada como estudiante. Quedó como prototipo incompleto: la API tiene las rutas base y el frontend solo tiene un formulario conectado.
- Proyecto histórico, sin mantenimiento. Lo conservo como registro de mi trayectoria.

## Funcionalidades observadas en el código

- API REST en Express (`Servidor/`) con rutas y controladores para tarjetas, transacciones, cajeros, sucursales, socios y clientes: listar, crear y consultar por id sobre PostgreSQL (`pg`).
- Frontend en Angular 8 (`Frontend/`) con formulario de registro de cajeros conectado a la API. El resto de componentes, servicios y modelos están generados pero vacíos.
- CORS configurado para `http://localhost:4200`.
- Dos archivos de audio `.ogg` en la raíz sin uso en el código.

## Tecnologías

- Node.js, Express 4, pg 7, morgan, cors, nodemon.
- Angular 8, TypeScript, Materialize CSS 1.0 (vía CDN).
- PostgreSQL (base `TeRegalo`, tablas `tbtarjetas`, `tbtransacciones`, `tbcajeros`, `tbsucursales`, `tbsocios`, `tbclientes`). El esquema SQL no está incluido en el repositorio.

## Cómo correrlo

Backend (puerto 3000):

```bash
npm install
DATABASE_URL=postgres://usuario:clave@localhost:5432/TeRegalo npm run Rserver
```

Frontend (puerto 4200):

```bash
cd Frontend
npm install
npx ng serve
```

## Estado

Proyecto histórico, sin mantenimiento.

## Licencia

LGPL-3.0 (ver `LICENSE`).
