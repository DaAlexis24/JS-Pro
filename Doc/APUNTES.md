# JS - PROFESSIONAL

## Miércoles 15/01/2025

El objetivo de esta sesión es configurar un proyecto Fronted desde 0.

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

### Errores de TS

Los errores de tipado de TS suelen ser algo que se toman muy enserio, pero suele pasar que, aunque haya una función mal escrita.

### Testing

Esto es un paso muy importante a la hora de desplegar tu proyecto. Existen muchísimas opciones, pero vamos a utilizar [Vitest](https://vitest.dev/ "Vitest"), ya que es el framework más moderno y rápido del mercado, quitando mercado a **_Jest_**

#### ¿Qué es un test?

Lo que uno más desea a la hora de desplegar un proyecto es que funcione con la menor cantidad de fallos posible (o ninguno si es que se puede), así que para realizar ello realizamos un "Test".

En el siguiente ejemplo, veremos un caso de testing...

```TS
export const add = (a: number, b: number) => a + b;
console.log(add(0, 1)); //1
console.log(add(1, -2)); //-1
console.log(add(1.5, 3.4)); //4.9
```

... manual :(

El problema de esto, es que, si hablamos de un proyecto grande, tendríamos que enfocarnos en muchísimos tests y eso nos llevaría muchísimo tiempo, para ello existe **_Vitest_**

#### ¿Que tenemos que configurar para poder utilizar Vitest?

1. Lo instalamos dentro de nuestro proyecto utilizando el comando: `npm install -D vitest`
2. Nos dirigimos al fichero [package.json](/package.json "Package JSON") y ubicamos el apartado de `"scripts"`, acá añadimos la siguiente línea de código: `"test": "vitest"`
3. Creamos el archivo **_vite.config.ts_** en la raíz del proyecto, y lo codificamos de la siguiente manera:

   ```TS
    import { defineConfig } from 'vitest/config';

    export default defineConfig({
      test: {
        // son una serie de elementos que están definidos por defecto
        globals: true,
      },
    });
   ```

4. Creamos un nuevo fichero en la carpeta del fichero que _queremos_ **testear** con la siguiente nomenclatura: `ficheroTSaEvaluar.test.ts`. En nuestro caso, probaremos con el archivo [services.test.ts](../demo-pro/src/services.test.ts "Testing Services")

> npm run tsc -- -h, el "--" hace que todo lo que este a la derecha de esta, sea un comando del script seleccionado, que en este caso será _tsc_

## Jueves 16/01/2025

Hemos creado un proyecto nuevo, llamado [front](/front/about.html), donde realizaremos nuestros primeros pasos con esta clase de tecnología.

### Problemas con el build

En este proyecto, tenemos 2 ficheros HTML, y vemos que al utilizar el comando `npm run build` solo nos compila un proyecto.

Para corregir esto debemos de configurar el comando `build` para crear **multi pages**, para ello tenemos que dirigirnos al fichero `vite.config.ts` y pegar lo siguiente:

```TS
import resolve from 'path' //importante
 build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        main: resolve(__dirname, 'page1/index.html'),
        main: resolve(__dirname, 'page2/index.html'),
      },
    },
  }
```

Ahora, también podemos crear carpetas en la raíz del proyecto con el nombre de

> [!IMPORTANT]
>
> Recuerda que en _src_ solo debemos de tener los archivos de tipo TS, CSS, SVG que utilizaremos para dotar de dinamismo y estilos al proyecto.
