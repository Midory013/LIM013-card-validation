# Tarjeta de crédito válida
## Git y Github (comandos) 
Hacemos las configuraciones iniciales 
- Configuramos el nombre de usuario (colocar el de la cuenta de github)
  $ git config --global user.name "Midory013"
- Configuramos el correo
  $ git config --global user.email "midoryfa@gmial.com"
### Clonamos el proyecto github en nuestra computadora
  - Forqueamos 
  - Al forquear copiamos URL de nuestro proyecto de github 
  - Nos hubicamos dentro de la carpeta que deseamos clonar el proyecto y lo habrimos en gitbash
  - Dentro del terminal gitbash:
    $ git clone https://github.com/Midory013/LIM013-card-validation.git
  - Hacemos todo esto para descargar todos los archivos de proyecto que se veran en la carpeta

### Instalamos las dependecias de Node.js
  - Para esto habrimos la terminal de node.js y desde ahi nos vamos a nuestro archivo donde vamos a trabajar en el proyecto, para esto lo que hacemos entrar al directorio donde vamos a trabajar para el proyecto
  Para poder agregar los directorios realizon el siguiente comando:
  "cd nombreDelDirectorio"
  - Luego instalamos las dependencias de node.js: "npm install"
  - Al terminar en nuestra carpeta se crearan una carpeta y un archivo: "node_modulos" y "package-lock"

### Creamos un documento .gitignore
  - Dentro de nuestro editor creamos el archivo .gitignore
  - Y dentro de este archivo ponemos la carpeta (node_modules/) que queremos ignorar, es decir, que no  
    queremos que se haga seguimiento 
  - Añadimos este archivo .gitignore y package-lock.json: 
    $ git add .gitignore
    $ git add package-lock.json
  - Luego creamos un archivo .eslintrc y copiamos el siguiente codigo:
    
    {
      "env": {
      "browser": true
      },
      "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
      },
      "extends": "eslint:recommended",
      "rules": {
      "no-console": "warn"
      }
    }

  - Creamos un archivo .babelrc y copiamos la siguiente la siguiente línea de codigo 
    {  "plugins": ["@babel/plugin-transform-modules-commonjs"]}
  - Añadimos nuestro archivo:
    $ git add .babelrc
    $ git add .eslintrc
  - Y luego creamos la carpeta .coverage ponemso en la terminal "npm test" en el terminal saldrán errores y 
    es porque aun no tenemos niguna prueba 
  - Como se creo la carpeta coverage tenemos colocarlo en el los archivos omitidos (para esto tenemos
    hacerlo dentro del gitignore "coverage/"), luego volvemos añadir el archivo ya que se actualizo:
    $ git add .gitignore
    $ git add status

  ### Administramos nuestro repositorio 
  - **Inicializamos el repositorio**, debemos de iniciar un local. Dentro del terminal en la carpeta donde esta 
    nuestros archivos y colocamos el siguiente comando:
    git init
    Esto inicializa un repositorio, crea una carpeta .git dentro del folder del proyecto y recien emprezar a 
    hacer **commits** y subir los cambios que haces locales a un repositorio en la nube
  - **Commits** con esto guardamos y subimos los archivos al repositorio (alguna actualizacion en ella) 
    tambien puede hacerse al local (depende donde hayas creado el repositorio), para eso hacemos lo siguiente en el terminal:
    git add nombre-del-archivo  
    //pero esto es si queremos agregar un archivo en especifico, ahora si queremos agregar todos los archivos seria este: "git add ." el "." es un comodin que indica que subiremos todos los archivos creados
    git status 
    //este comando nos ayuda a ver lo que tenemos realmente en el archivo, es donde puedes ver si tienes cambios o no por subir
    git commit -m "Nuevo proyecto"
    //Este comando lo utilizamos si queremos enviar cosas al repositorio, es importante añadir un comentario descriptivo, del porque estamos añadiendo el commit, cuales han sido los cambios 
    git remote add origin <url-repositorio-github>
    //con este comando especificamos el origen de nuestro repositorio 
    git push origen master 
    //por ultimo introducimos este comando para que se suban nuestros archivos al repositorio
    //Asi tendras que seguir los mismos mismos pasos cada que desees enviar los cambios a tu repositorio remoto (Github)

  ## Algoritmo de Luhn  
    El [algoritmo de Luhn](https://es.qwe.wiki/wiki/Luhn_algorithm)tambien llamado algoritmo de modulo 10, es un metodo de suma de verificacion, se utiliza para validar numeros de identificacion. 
    Este algoritmo es simple. Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]); a todos los números que ocupan una posición par se les debe multiplicar por dos, si este número es mayor o igual a 10, debemos sumar los dígitos del resultado; el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.

  ## Resumen del proyecto
    En esta pagina web el usuario podra validar su tarjeta de credito con el Algoritmo de Luhn. En la pagina aparece como un formulario en el que se le solicitara al usuario que ingrese su numero de tarjeta de credito para poder verificar si es valida tenemos que realizar los siguientes pasos:
    - Ingresar el numero de la tarjet
    - Invertir el numero de la tarjeta de credito
    - Creamos un array inverso con "reverse()"
    - Realizamos la oeraciones del Algoritmo de Luhn 
    - Los numeros de la posicion impar de la tarjeta se mantienen
    - Los numeros de la posicion par se multiplican por dos
    - Si el resultado es mayor o igual que 10, debemos de sumar los digitos del resultado 
    - Si la suma es menor se debe de sumar todas las posiciones "pares e impares" 
    - Luego dividir la suma con 10 
    - Si el resto de la divison es igual a 0, es valida la tarjeta; si el resto no es cero, no es valida

    1. Para esto creamos dos objetos: isValid y maskify
    2. En el isValid utilizamos el Algoritmo de Luhn 
    3. Despues de que el usuario haya ingresado sus datos entre ellas su numero de tarjeta, con el metodo
       reverse() invertimos el orden de los elementos.
    4. Convertimos el numero en un string con toString()
    5. Definimos y creamos la variable *let cadena* donde se va almacenar el numero de caracteres de la
      tarjeta con *.length* 
    6. Luego definimos cifra y cifra_cad como null (porque aun no tiene un valor)
    7. Y luego el ciclo for iterara los numeros ya invertidos
    8. Multiplicando por dos a los digitos pares y convirtiendolos en numeros *parseInt*, ya no en cadenas
    9. Y si la cifra es mayor que nueve se sumaran sus digitos y como su nu
    10. Creamos otro for para que se itere los nuevos digitos y se hallan transformado en enteros (parseInt)
    11. Dentro del bucle se establece la condicion Si el numero resultante es mayor o igual a 10, la variable
       *suma* , sumara los digitos mayores e iguales a 10 (para que asi queden en una sola cifra)
    12. Se establece otra condicion si el total de las suma de los numeros con la operacion de resto (%) de
        10 es igual a 0, enviara un *alert* indicando que el numero de tarjeta ingresado es valido. En caso contrario, enviara otro *alert* avisando que el numero ingresado no es valido.

  ### Objetivos de aprendizaje
    Los objetivos que aprendizaje que tenia en el proyecto:
    
    * Establecer mis conocimientos sobre los usos semanticos de *HTML*
    * Poder definir los usos de selectores de *CSS* y del *DOM* 
    * Poder manejar los diferentes metodos de JavaScript (toString(), substring())
    * Manipulacion de 


  
   


