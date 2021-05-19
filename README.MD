# Webpack Starter

## Una configuración basica de webpack con un sistema de servidor de desarrollo basico

Webpack version: 5.34

## Folders
entrypoint: /src
Outpoint: /public

## Package.json
```
"scripts": {
    "build": "webpack --mode production",
    "builddev": "webpack --mode development",
    "start": "webpack server --mode development --open",
    "watch": "webpack --watch"
  },
```
## Developers
### Activar server
** npm start ** 

### Crear archivos 
** npm run builddev ** 

### Watch (sin live server)

** npm run watch **

## version 1.0.0