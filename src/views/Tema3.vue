<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Seleccionar sistemas operativos de servidores y dispositivos

    .row.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Cuando se habla de servidores se conocen como computadores que siempre proveen un servicio a un cliente en especial o varios clientes. Entonces, quiere decir que son equipos de alta disponibilidad comparten recursos tanto de #[em hardware] como de #[em software]. Cabe resaltar que ningún equipo tiene la posibilidad de trabajar si no tiene un sistema operativo. En ese mismo sentido, cuando existe una red de equipos esta no se puede utilizar si no se tiene un sistema operativo de red. Debido a lo anterior, es necesario que exista un equipo con estos sistemas con el fin de garantizar una gestión centralizada de los recursos, lo cual también se conoce como un “grupo de trabajo”.

    .row.mb-5
      p Uno de los trabajos más importantes en el área es determinar la configuración que tenga una mejor adaptación a las necesidades que la red presente. En términos de red se identifican dos componentes:


    .row.justify-content-center.mb-5
      .col-lg-4
        .cajon.color-primario.p-4
          h4 Servidores
          p Son aquellos equipos que se configuran con los operativos de red que generan recursos a los clientes y el #[em software] de red del cliente permite mantener esos recursos disponibles para los equipos clientes.
          p Para ellos se necesita realizar una instalación, administración y configuración de los denominados servidores que conforman los sistemas operativos en red.

      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema3/img2.svg", alt="alt").img2-tm3

      .col-lg-3.mt-5
        .cajon.color-primario.p-3
          h4 Clientes
          p Cuando los equipos normalmente se configuran con sistemas operativos monopuesto, se conectan y son validados con el servidor para empezar a trabajar en la red.


    h2 Instalación

    .row.mb-5
      p A continuación, se describe el paso a paso de instalación de drivers:
      p Aquí se presenta el procedimiento para instalar, de forma manual, los controladores que se requieren en una estación de trabajo.

    .row.justify-content-center.mb-5
      .col-10.col-lg-3.mb-4
        figure
          img(src="@/assets/curso/temas/tema3/img3.svg", alt="alt")

      .col-lg-9
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Primeros pasos")
            .col
              p Primero, debe realizar alguno de los siguientes pasos:

              ul.lista-ul--color.fa-ul
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Introduzca el DVD de herramientas y los controladores en la unidad de CD/DVD del computador. Si el disco se inicia de manera automática, entonces, debe cerrar el programa desde el ícono de cierre. Luego, desde el Explorador de Windows debe dirigirse a la carpeta “drivers\windows”.

                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Si ha descargado el archivo denominado Windows.zip del sitio de descarga, entonces, debe extraerlo en una carpeta del computador de la estación de trabajo.

          .row(numero="2" titulo="Instalar los controladores de <em>chipset</em>")
            .col
              p Posteriormente, debe instalar los controladores de #[em chipset]:

              ul.lista-ul--color.fa-ul
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Abra la carpeta denominada “windows\chipset”, la cual corresponde a los controladores y se encuentra en el Explorador de Windows.
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Debe ejecutar el archivo “.exe” para iniciar la instalación. Para ejecutarlo solo debe hacer doble clic en este.
                li.d-flex.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Asegúrese de seguir las instrucciones que van apareciendo para lograr la correcta instalación de los controladores del #[em chipset].

          .row(numero="3" titulo="Instalar el controlador Ethernet")
            .col
              p Para instalar el controlador Ethernet:

              ul.lista-ul--color.fa-ul
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Desde el Explorador de Windows, vaya a la carpeta de los controladores windows\nic. Haga doble clic en el archivo ejecutable .exe.
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Recuerde que debe seguir las instrucciones que van apareciendo en la pantalla para lograr la correcta instalación del controlador Ethernet.

          .row(numero="4" titulo="Instalar a partir del uso de Windows Device Manager")
            .col
              p El controlador se puede instalar a partir del uso de #[em Windows Device Manager]:
              ul.lista-ul--color.fa-ul
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Abra el #[em Device Manager].
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Haga clic con el botón secundario del ratón en el NIC con el signo de admiración amarillo (¡) y elija #[em Update Driver] (actualizar controlador).
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Seleccione #[em No, not at this time] (No en este momento) y haga clic en #[em Next] (Siguiente).
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Seleccione #[em Install from a Windows Specific Location] (Instalar de una lista o ubicación específica) y, luego, haga clic en #[em Next] (Siguiente).
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Haga clic en Examinar y vaya a la carpeta del controlador Ethernet de la estación de trabajo correspondiente. Por ejemplo:
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 windows\nic\pro1000
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Actualice el controlador Ethernet.

          .row(numero="5" titulo="Instale el controlador TPM")
            .col
              ul.lista-ul--color.fa-ul
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Desde el Explorador de Windows, vaya a la carpeta windows\TPM\driver\app.
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Extraiga el archivo .zip.
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Haga doble clic en el archivo “.exe”, el cual es un archivo ejecutable.
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Siga las instrucciones del asistente de la instalación para instalar el controlador TPM.

          .row(numero="6" titulo="Instale el controlador Intel ME")
            .col
              p Instale el controlador Intel ME (usado como parte de la solución de gestión Intel ASF)

              ul.lista-ul--color.ps-3.fa-ul
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Desde el Explorador de Windows, vaya a la carpeta windows\me\driver.
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Haga doble clic en el archivo ejecutable .exe
                li.d-flex
                  i.fas.fa-circle.color-vineta1.fa-li
                  p.mb-0 Siga las instrucciones del asistente de instalación para instalar el controlador Intel ME.

          .row(numero="7" titulo="Instale el controlador de vídeo NVIDIA Quadro FX")
            .col
              p Instale el controlador de vídeo NVIDIA Quadro FX:
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-circle.color-vineta1
                  p.mb-0 Abra el #[em Windows Device Manager].
                li.d-flex
                  i.fas.fa-circle.color-vineta1
                  p.mb-0 Haga clic con el botón secundario del ratón en el controlador de pantalla y seleccione #[em Update] (Actualizar).
                li.d-flex
                  i.fas.fa-circle.color-vineta1
                  p.mb-0 Aparecerá el #[em Hardware Update Wizard] (Asistente para la actualización de #[em hardware]).
                li.d-flex
                  i.fas.fa-circle.color-vineta1
                  p.mb-0 Seleccione #[em No, not at this time] (No en este momento) y haga clic en #[em Next] (Siguiente).
                li.d-flex
                  i.fas.fa-circle.color-vineta1
                  p.mb-0 En el cuadro de diálogo siguiente, seleccione #[em Install from a Windows specific location] (Instalar de una lista o ubicación específica), y haga clic en #[em Next] (Siguiente).
                li.d-flex
                  i.fas.fa-circle.color-vineta1
                  p.mb-0 Haga clic en #[em Browse] (Examinar) y vaya a la carpeta windows\video\ so\versión
                li.d-flex
                  i.fas.fa-circle.color-vineta1
                  p.mb-0 Haga doble clic en el archivo ejecutable .exe.
                li.d-flex
                  i.fas.fa-circle.color-vineta1
                  p.mb-0 Siga las instrucciones del asistente de la instalación para instalar el controlador de vídeo.

          .row(numero="8" titulo="Instale el controlador de audio RealTek HD")
            ul.lista-ul--color
              li
                i.fas.fa-circle.color-vineta1
                | Desde el Explorador de Windows, vaya a la carpeta windows\video\ so (donde so es Vista o 2008).
              li
                i.fas.fa-circle.color-vineta1
                | Haga doble clic en el archivo ejecutable .exe.
              li
                i.fas.fa-circle.color-vineta1
                | Siga las instrucciones del asistente de la instalación para instalar el controlador de audio RealTek HD.
            p Finalmente, recuerde reiniciar la estación de trabajo.

    .bg1
      .row.p-4.align-items-center
        .col-lg-8
          h4 Control de #[em drivers]
          p De manera general, se puede entender un controlador como un componente del #[em software], el cual posibilita que el sistema operativo se comunique con un dispositivo. A continuación, se mostrará un ejemplo: supongamos que una aplicación requiere leer unos datos que se encuentran en un dispositivo. Para cumplir esta acción, la aplicación debe llamar a una función, la cual debe ser implementada por el sistema operativo y, luego, este sistema llama a una función, que debe ser implementada por el controlador. Este controlador fue escrito por la misma empresa que fabricó y diseñó el dispositivo y, por ende, puede establecer comunicación clara con el #[em hardware] del dispositivo con el objetivo de obtener los datos. De esta manera, una vez que el controlador logra la obtención de los datos que se encontraban en el dispositivo, entonces, devuelve los datos al sistema operativo y este, a su vez, los devuelve hasta la aplicación.

        .col-lg-4
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1 
            br
            span.fst-italic Aplicación 
          figure
            img(src="@/assets/curso/temas/tema3/img4.svg", alt="alt")

    .bg2
      .row.p-4
        .col-lg-7
          h4 Expansión de la definición
          p Podemos simplificar la explicación de las siguientes formas:
          ul.lista-ul--color
            li
              i.fas.fa-circle.color-vineta1
              p.mb-0 Si bien la empresa que diseñó el dispositivo puede ser la misma que crea el controlador, muchas veces, el dispositivo ha sido diseñado según el estándar de #[em hardware] publicado. Por lo tanto, el controlador puede ser diseñado por otra empresa.
            li
              i.fas.fa-circle.color-vineta1
              p.mb-0 Existen controladores que no establecen comunicación directa con un dispositivo. Así, por ejemplo, para una solicitud E/S como la lectura de datos, pueden existir múltiples controladores, los cuales se superponen para participar en la solicitud realizada. El primer controlador participante se ubica en la parte superior de la pila y el último, en la parte inferior. Es importante tener en cuenta que algunos de los controladores pueden involucrarse a través de la modificación del formato de la solicitud. Estos controladores que cambian el formato no establecen comunicación directa con el dispositivo, sino que se relacionan con otros controladores que están en niveles más bajos de la pila.

        .col-lg-5.mt-5
          figure
            img(src="@/assets/curso/temas/tema3/img5.svg", alt="alt")

      .row.p-5.align-items-center
        .col-lg-4
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 2. 
            br
            span.fst-italic Controladores 
          figure
            img(src="@/assets/curso/temas/tema3/img6.svg", alt="alt")

        .col-lg-8.mt-4
          h4 Expansión de la definición
          p Podemos simplificar la explicación de las siguientes formas:
          ul.lista-ul--color
            li
              i.fas.fa-circle.color-vineta1
              | Controlador de función: corresponde a aquel controlador ubicado en la pila que establece una comunicación directa con el dispositivo.
            li
              i.fas.fa-circle.color-vineta1
              | Controlador de filtro: son aquellos controladores ubicados en la pila que realizan un procesamiento auxiliar y no tienen comunicación directa con el dispositivo.
          p Algunos controladores de filtro no participan de manera activa en las solicitudes de E/S, solamente observan y registran la información. Además, algunos controladores de este tipo permiten comprobar que los demás controladores que hay en la pila hagan de forma correcta el control de la solicitud.
    .bg1.mb-5
      .row.p-4
        .col-lg-8
          h4 Controladores de #[em software]
          p Estos controladores no están asociados a los dispositivos de #[em hardware]. Así, son controladores exclusivos del sistema. Por ejemplo, en el caso en el que se requiera acceder a las estructuras de datos principales del sistema operativo, es necesario garantizar el acceso mediante la ejecución de un código en modo #[em kernel]. Para lograr esto, entonces, se debe dividir la herramienta en dos componentes. El componente número uno se puede ejecutar en el modo usuario y, por lo tanto, va a presentar una interfaz de usuario. El componente número dos se va a ejecutar en el modo #[em kernel] y, por ende, puede acceder a los datos principales que hay en el sistema operativo. Se debe tener en cuenta que el componente número uno se denomina aplicación, mientras que el número dos se llama “controlador de #[em software]” y, tal y como se puede ver, no tiene relación alguna con un dispositivo de #[em hardware].  A continuación, se muestra una aplicación en modo de usuario que se comunica con un controlador de #[em software] en modo #[em kernel.]

        .col-lg-4
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 3
            br
            span.fst-italic Aplicación en modo de usuario 
          figure
            img(src="@/assets/curso/temas/tema3/img7.svg", alt="alt")


    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-degradado.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-lg-2.mb-3
              img(src="@/assets/curso/temas/tema3/img8.svg")
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.texto-blanco Modo de usuario y modo #[em kernel] - Windows drivers | Microsoft Learn
                  p.texto-blanco Para obtener más información sobre los modos de procesador, ver el siguiente enlace
                .col-sm-auto
                  a.boton--sm.color-acento-contenido.me-3(href="https://learn.microsoft.com/es-es/windows-hardware/drivers/gettingstarted/user-mode-and-kernel-mode" target="_blank")
                    span Descargar
                    i.fas.fa-link


</template>

<script>
export default {
  name: 'Tema3',
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
