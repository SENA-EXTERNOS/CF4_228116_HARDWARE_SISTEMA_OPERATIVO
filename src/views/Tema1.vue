<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Configurar el sistema operativo según términos de referencia

    .row.mb-5
      .col-lg-8.mb-4
        p Para las configuraciones de los subsistemas operativos, se deben aplicar las siguientes pautas que sirven como herramientas esenciales para realizarla de forma exitosa. Si se van a desarrollar estas distintas actividades se debe hacer una copia de seguridad, para evitar que si, en algún momento, se presentan inconvenientes se pierda la información.
        ul.lista-ul--color.ps-3
          li 
            i.fas.fa-circle.color-vineta1
            | Configurar el dispositivo de arranque en la BIOS.
          li 
            i.fas.fa-circle.color-vineta1
            | Crear las particiones necesarias en el disco duro.
          li 
            i.fas.fa-circle.color-vineta1
            | Crear los sistemas de ficheros.
          li 
            i.fas.fa-circle.color-vineta1
            | Seleccionar los paquetes.
          li 
            i.fas.fa-circle.color-vineta1
            | Configurar e instalar las aplicaciones a utilizar.
        
        p Existen subsistemas operativos que se dividen en tres tipos. Lo invitamos a ver el siguiente video donde podrá conocer más sobre esta clasificación. 

      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/img1.svg", alt="alt")

    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    separador

    #t_1_1

    .titulo-segundo.color-primario.my-5(data-aos="fade-left")
      h2 1.1 Sistemas operativos por servicios (visión externa):

    .row.mb-5
      p Estos diferentes sistemas operativos se pueden dividir por número de usuarios, por el número de tareas o por el número de procesadores.

    .row.justify-content-center.mb-5
      .col-10.col-lg-3.mb-4
        figure
          img(src="@/assets/curso/temas/tema1/img2.svg", alt="alt")     

      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris2")
          .row(titulo="Por número de usuarios")
            h5.mb-3 Sistema operativo monousuario.
            p.mb-4 Los monousuarios son los que manejan un usuario a la vez, no tienen en cuenta el número de procesadores que tenga el ordenador o quizás los diferentes procesos o actividades donde el usuario que el usuario pueda utilizar de forma simultánea. En esta denominación se incluyen todos aquellos sistemas que solo permiten el ingreso mediante un usuario único.
            h5.mb-3 Sistema operativo multiusuario.
            p Los sistemas operativos multiusuarios permiten brindar servicios a diferentes usuarios a la vez, diferentes terminales conectadas al computador o utilizando varias actividades remotas en una red de comunicaciones. En estos sistemas no se tienen en cuenta los procesadores en la máquina ni el número de procesos que cada usuario puede ejecutar de forma paralela con otros programas.
            p Dentro de esta categoría se tienen en cuenta aquellos usuarios que pueden tener acceso a más de dos usuarios.

          .row(titulo="Por el número de tareas")
            h5.mb-3 Sistema operativo monotarea.
            p.mb-4 En este tipo de sistemas se incluyen todos los que tienen una restricción de solo una tarea a la vez por cada usuario. En ese sentido, es posible que un sistema multiusuario sea monotarea, es decir, puede tener varios usuarios simultáneos; sin embargo, cada uno solo podrá ejecutar una tarea y no podrá tener varias tareas paralelas. 
            h5.mb-3 Sistema operativo multitarea.
            p Tal y como se indica en su nombre, este tipo de sistema permite realizar varias tareas de forma simultánea. Cabe resaltar que, actualmente, la mayoría de los sistemas operativos tienen esta función, dado que los computadores pueden realizar múltiples procesos, correspondientes a diversas tareas, en un mismo instante.
            p Se debe tener en cuenta que en todos aquellos sistemas donde hay multitareas y se ejecutan varios procesos de forma simultánea, cada una de las actividades ejecutadas ocupa el microprocesador durante una fracción de segundo, como sucede en OS/2. 
            p Los sistemas multitarea depuran el código fuente mientras están compilando otros programas, por esta razón se pueden recibir notificaciones de otros sistemas. Este sistema operativo se conoce por sus funciones para tolerar las ejecuciones concurrentes de dos o más procesos activos.
            p  La multitarea suele trabajar en conjunto con el soporte de #[i hardware] y #[i software], con la finalidad de proteger la memoria y evitar que los procesos interfieran el espacio de direcciones y el comportamiento de otros procesos residentes.
          
          .row(titulo="Por el número de procesadores")
            h5.mb-3 Sistema operativo de uniproceso.
            p.mb-4 Este tipo de sistema posibilita el manejo de un solo procesador en el computador. En ese sentido, si hay más procesadores no es posible utilizarlos. Dentro de estos sistemas operativos se encuentran DOS y MacOs.
            h5.mb-3 Sistema operativo de multiproceso.
            p En este sistema operativo se tienen dos o más procesadores en el computador, los cuales pueden ser utilizados de forma simultánea con el objetivo de distribuir los procesos que se realizan. Estos sistemas se pueden ejecutar de manera asimétrica o simétrica. 
            p Por un lado, la forma asimétrica permite que el sistema operativo seleccione, entre los procesadores, cuál puede asumir el rol de un procesador maestro, el cual distribuirá la carga hacia los otros procesadores disponibles, que se denominan “esclavos”. Por otro lado, la forma simétrica se refiere a cuando los procesos o algunas de sus partes #[i (threads)] son distribuidos, de forma aleatoria, a los procesadores que se encuentran disponibles, es decir, todos los procesadores se encuentran en el mismo nivel y esto posibilita, de manera teórica, una distribución y un equilibrio en la carga de trabajo generada por las tareas o procesos que deben ejecutarse.
            p En este tipo de sistemas, es fundamental tener en cuenta cómo se crean las aplicaciones, dado que eso posibilita hacer uso de los procesadores que hay disponibles. Algunas de las aplicaciones que existen fueron creadas para ser utilizadas en sistemas monoproceso, por lo que, a menos de que existan secciones de código paralelizable, es decir, que se pueda ejecutar de forma simultánea, entonces usar un sistema multiproceso no significaría una ventaja. 

    separador

    #t_1_2

    .titulo-segundo.color-primario.my-5(data-aos="fade-left")
      h2 1.2 Sistemas operativos por la forma de ofrecer sus servicios

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4
          p Dentro de esta clasificación se trata una visión externa de cómo el usuario accede a los servicios dentro de los que se clasifican los sistemas operativos de red y los sistemas operativos distribuidos.

    .row.justify-content-center
      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--hr")
        .row(titulo="Sistema operativo de red").p-4
          .col-lg-7
            p Los sistemas operativos de red se entienden como los que tienen la forma de comunicarse y funcionar con sistemas operativos en diferentes computadores, por medio de las transmisiones para cambiar información, ejecutar comandos remotos, transferir archivos, ejecutar, etc. El usuario debe identificar la sintaxis del conjunto de llamadas al sistema que se quieran ejecutar. Por ejemplo, si un usuario en el computador “cali” necesita el archivo “matriz.pas” que se localiza en el directorio /software/codigo en el ordenador “pereira” bajo el sistema operativo UNIX, este usuario podría copiarlo, a través de la red, utilizando los siguientes comandos: cali% cali% rcp pereira:/software/codigo/matriz.pas . cali%. En este caso, el comando rcp que significa “remote copy” permite que se traiga el archivo desde el computador llamado “pereira” y, además, lo ubica en el directorio en el cual se ejecutó el comando que se mostró anteriormente. Lo más importante es saber que es posible que el usuario ingrese y comparta diversos archivos.
          
          .col-lg-5
            figure
              img(src="@/assets/curso/temas/tema1/img3.svg", alt="alt")          

        .row(titulo="Sistema operativo distribuidos").p-4
          .col-lg-7
            p Los sistemas operativos distribuidos incluyen diferentes servicios como de red, permitiendo agrupar recursos en los cuales se incluyen unidades de respaldo, impresoras, memoria, procesos, unidades centrales de proceso en una misma máquina virtual donde el usuario pasa de forma transparente. Por ejemplo, si el usuario necesita un archivo, no necesita conocer la ubicación del recurso, ya que con conocer el nombre del archivo es suficiente.
            p Adicionalmente, este sistema tiene ventajas muy destacadas que se nombran a continuación:
            ul.lista-ul--color.ps-3
              li 
                i.fas.fa-circle.color-vineta1
                | Contiene una elevada eficacia.
              li 
                i.fas.fa-circle.color-vineta1
                | Incrementa la tolerancia ante fallas o errores, ya que la información que tiene está dividida en nodos; de esta manera, si se cae uno de los nodos no hay una pérdida de información porque los datos se encuentran duplicados en otros nodos. 
              li 
                i.fas.fa-circle.color-vineta1
                | Es mucho más veloz y mejora el procesamiento en la distribución. Así, cuando se hace una consulta, los procesamientos son distribuidos entre los diversos nodos que conforman el sistema de red. De esta forma, en lugar de enviar la información a un solo nodo y adjudicarle todo el trabajo, esta tarea se distribuye.
              li 
                i.fas.fa-circle.color-vineta1
                | Alta escalabilidad, este término indica que, en el momento en el que se requiera más procesamiento o sea necesario incluir más de un disco duro, entonces, el equipo se añade de manera horizontal al clúster o sistema distribuido para evitar el crecimiento vertical que implica añadir mayor almacenamiento, RAM o CPU.
                
          .col-lg-5.mt-5
            figure
              img(src="@/assets/curso/temas/tema1/img4.svg", alt="alt")          






      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
