![Ionic CI](https://github.com/sigcorporativo-ja/app-mapea-templates/workflows/Ionic%20CI/badge.svg)

# mapea-template-ionic-mbtiles
Ejemplo de app móvil basada en la plantilla ionic de Mapea, que muestra una capa Mbtiles local.

Esta app sirve solo a modo de demo, y realiza la lectura del fichero .mbtile desde la propia app. En una app que vaya a mostrar capas de este tipo, la ubicación del .mbtile debiera ser externa a la misma, y las instrucciones de lectura del fichero adaptadas para ello.

**Prerrequisitos**
Esta versión se ha testeado con el siguiente software:

* node v10.20.1
* npm v6.14.4
* Ionic CLI v5.4.16:
  ```javascript
  npm i -g ionic
  ```
* Cordova v10.0.0
```javascript
  npm i -g cordova
  ```
* Android SDK, con variable de entorno ANDROID_SDK_ROOT definida y binarios en el path del sistema.
* Java 8, con variable de entorno JAVA_HOME definida y en el path del sistema.
* Gradle v6.7 en el PATH del Sistema.

## Desarrollo: pruebas desde el navegador
```javascript
  ionic serve
```
## Build
```javascript
    ionic build
```
Genera la carpeta /www
TODO: Copiar después la carpeta "lib" dentro de www. Pendiente automatizar.

## Generación apk
```javascript
cordova platform add android --save
ionic cordova build android
```
Genera fichero: app-mapea-templates/platforms/android/app/build/outputs/apk/debug/app-debug.apk