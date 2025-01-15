# JS - PROFESSIONAL

## Miércoles 15/01/2025

Creación de un proyecto utilizando [Vite](https://es.vite.dev/guide/ "Vite Guide"), con la configuración _Vainilla_ y _Typescript_

Es importante recordar, que el fichero "index.html" sí o sí tiene que estar en la raíz del proyecto, para que se el proyecto se pueda construir de la manera correcta, esto se puede modificar para que se pueda guardar en la carpeta **src** aunque no es lo más recomendable.

Este archivo tiene una particularidad, no acepta links de CSS, esto es porque Vite QUIERE controlar los estilos, para así poder compactarlo por su cuenta. Esto se realiza en el archivo _main.ts_, ahí si se puede importar estilos.

Conociendo esto, nos fijamos los estilos tienen no tienen SCOPE. Hay herramientas que te ayudan a otorgar SCOPE a tus estilos, como CSSModules, pero también podemos utilizar anidamientos y ya esta:

```css
.card {
  h2 {
    color: brown;
    /* Así, solo los h2 que se encuentren dentro del elemento que tengan la clase "card" */
  }
}
```

### Fichero main.ts

Acá se configura lo que se va a compilar para hacer la construcción final del proyecto, se realizan los principales _imports_ del programa y vemos una forma de como este trabaja con los archivos SVG, ya que los trata como una importación, les otorga un nombre y los concatena.

Ahora, al realizar el _build_ nos dará una carpeta oculta llamada **dist**, donde los archivos se compilaran en 2 nuevos archivos, que serán JS y CSS.

### Herramientas para MEJORAR tu código

Linter, es una buena alternativa para que puedas seguir las reglas. En este caso nos descargamos ESLint.
