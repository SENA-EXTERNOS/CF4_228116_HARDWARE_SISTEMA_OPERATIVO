<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Dispositivos de infraestructura T.I.

    .row.mb-5
      p Dentro de los dispositivos que conforman la infraestructura T.I, en sistemas operativos, se habla sobre el espacio de usuario que se describe a continuación:


    .row.mb-5
      .tarjeta.SlyderA-bgr.p-3.p-lg-4
        SlyderA(tipo="b")
          .row.mx-4
            .col-lg-7
              h5 #[em Kernel]
              p Es la parte más importante del sistema operativo, se trata, específicamente, del #[em hardware] y es el encargado de administrar los recursos; se puede denominar como el cerebro del sistema operativo. En esta parte se describen las siguientes funciones:
              p Gestión de archivos: posibilita almacenar y ordenar los archivos, tal y como se hace en aquellas oficinas físicas de archivo, en las que se guardan datos soportados en papel.
              p Gestión de procesos: se utiliza cuando hay un gran número de programas que deben ejecutarse. En ese sentido, se administra el orden en el cual se van a ejecutar, además, se decide sobre la cantidad de recursos que van a usar, el tiempo durante el cual se lleva a cabo su ejecución, entre otros. El núcleo tiene una función de gestión de procesos y ayuda a realizar esta acción y el programador de procesos del #[em kernel] posibilita la multitarea.

            .col-lg-5
              figure.mb-3
                img(src="@/assets/curso/temas/tema2/img1.svg", alt="alt")

          .row.mx-4
            .col-lg-7
              p Gestión de memoria: optimiza el uso de la memoria y, así mismo, garantiza que las aplicaciones puedan ejecutarse posibilitando que haya suficiente memoria para cada una.
              p Gestión de entrada / salida o E/S: el #[em kernel] también permite la comunicación con los dispositivos externos, tales como el ratón, el teclado, las redes, los dispositivos de audio, entre otros.
              p Es importante aclarar que los usuarios no interactúan de forma directa con el #[em kernel], dado que la interacción se hace con la segunda parte del sistema operativo denominada “espacio de usuario”.

            .col-lg-5
              figure.mb-3
                img(src="@/assets/curso/temas/tema2/img1.svg", alt="alt")

          .row.justify-content-center.mx-4
            .col-lg-8
              h5 Espacio de usuario
              p Se conforma por lo que está alrededor del #[em kernel]. Por ejemplo, cuando se utiliza el editor de texto, las configuraciones del sistema, la música que se reproduce, etc. Es la característica principal y final de un sistema operativo, donde cada usuario puede interactuar con cada máquina.
              p Interactuando con el sistema operativo: al hacer uso de un sistema operativo se puede requerir la implementación de funciones como la creación de carpetas y archivos, el uso de ciertas aplicaciones, la eliminación de elementos, entre otras. Para cumplir estas tareas existen dos formas de interactuar con el sistema, a saber: un shell o una interfaz gráfica de usuario (GUI). A continuación, se describe cada una de ellas.
              p #[em Shell] o intérprete de comandos, corresponde a un programa que posibilita la interpretación de los comandos de textos, los cuales son enviados al sistema operativo para que este los ejecute. De esta forma, se genera un interfaz de usuario que permite a la persona acceder a los servicios que ofrece el sistema operativo.
              p GUI #[em (Graphical User Interface)]: corresponde a una forma de interacción con el computador basada en lo visual. Esto puede verse, por ejemplo, en el funcionamiento del ratón, el cual puede verse en la pantalla con el fin de identificar un elemento, arrastrarlo, abrirlo, modificarlo, entre otros.

            .col-lg-3
              figure.mb-3
                img(src="@/assets/curso/temas/tema2/img2.svg", alt="alt")








</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
