# Server con Express.js
Primer servidor en Express.js

## Instalar
Para el correcto funcionamiento del servidor es necesario instalar las siguientes dependencias:
* `npm install ejs body-parser`
* `npm instal express`
* `npm install nodemon -D`

## Ajustes
En le `package.json` de sebe agregar en el _script_ las siguiente lineas: 
`"start": "node app.js",
"dev": "nodemon app.js",`. Ejecutar `node run dev` y listo, el servidor estará funcionando y refrescando automáticamente.
