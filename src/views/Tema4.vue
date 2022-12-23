<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Software de virtualización

    .row.justify-content-center.mb-5
      .col-lg-7.mb-4
        p Este software es flexible y ágil permitiendo escalabilidad en la infraestructura de TI, además, genera ahorro de propiedad y operativos. También, este permite mayor rendimiento de los recursos y la automatización de las operaciones, simplificando la gestión de la infraestructura. 
        p Debido a las limitaciones de los servidores x86, muchas organizaciones de tecnologías de la información deben recurrir al uso de múltiples servidores, los cuales tienen un funcionamiento muy por debajo de su capacidad, dado que deben responder a las necesidades actuales de almacenamiento y procesamiento. Esta situación genera una gran ineficiencia y unos costes operativos excesivos.
        p La virtualización utiliza el software para imitar las características del hardware y crear un sistema informático virtual. Esto permite a las organizaciones de TI ejecutar más de un sistema virtual, y múltiples sistemas operativos y aplicaciones, en un solo servidor.

      .col-lg-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema4/img1.svg", alt="alt")

    .row.justify-content-center.mb-5
      .col-lg-11
        .cajon.color-primario.p-4
          h5 Máquina virtual
          p La máquina virtual es un sistema virtual que incluye un sistema operativo y una aplicación de uso. Es importante recordar que cada máquina virtual es independiente, si en un computador se instalan diferentes máquinas virtuales se pueden ejecutar al mismo tiempo incluso utilizando un mismo servidor.

    .titulo-segundo.color-primario.my-5(data-aos="fade-left")
      h2 Tipos de virtualización

    .row.mb-5
      p Existen dos tipos de virtualización, estos son:
  
    .row.justify-content-center.mb-5
      .col-10.col-lg-3.mb-4
        figure
          img(src="@/assets/curso/temas/tema4/img2.svg", alt="alt")     

      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris2")
          .row(titulo="Virtualización de servidores")
            p La virtualización de los servidores posibilita la ejecución de varios sistemas operativos en un solo servidor físico, a través del uso de máquinas virtuales, las cuales ofrecen un elevado rendimiento. Entre las ventajas principales del uso de máquinas virtuales se tienen:
            ul.lista-ul--color
              li 
                i.fas.fa-circle.color-vineta1
                | Mayor eficiencia del entorno de TI.
              li 
                i.fas.fa-circle.color-vineta1
                | Reducción de los costes operativos.
              li 
                i.fas.fa-circle.color-vineta1
                | Mayor velocidad de las cargas de trabajo.
              li 
                i.fas.fa-circle.color-vineta1
                | Mejoramiento del rendimiento de las aplicaciones.
              li 
                i.fas.fa-circle.color-vineta1
                | Mayor disponibilidad del servidor.
              li 
                i.fas.fa-circle.color-vineta1
                | Eliminación de la complejidad y la proliferación de servidores.

          .row(titulo="Virtualización de red")
            p La virtualización de la red posibilita la ejecución de aplicación en una red virtual de la misma forma en la que se ejecutan en una red física. Además, presenta un mayor número de ventajas operativas y una total independencia del hardware. De esta forma, la virtualización de la red muestra los dispositivos y servicios de red lógicos (puertos lógicos, conmutadores, enrutadores, cortafuegos, equilibradores de carga, VPN, entre otros.) a las cargas de trabajo vinculadas.





</template>

<script>
export default {
  name: 'Tema4',
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
