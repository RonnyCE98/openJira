# Next.js OpenJira Apps
Para correr localmente se necesita la base de datos
```
docker-compose up -d
```
* El -d, significa __detached__

* MongoDB URL local

```
mongodb://localhost:27017/entriesDB
```

## Configurar las variables de entorno
Renomber el archivo __.env.template__ a __.env__ 

## Llenar la base de datos con informacion de pruebas
``` http://localhost:3000/api/seed ```