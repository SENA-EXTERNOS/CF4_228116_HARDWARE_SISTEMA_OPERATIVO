<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Gestionar el sistema operativo

    .row
      p El sistema operativo se encarga de gestionar el #[em hardware] del sistema informático para llevar a cabo esa tarea de interfaz o intermediario entre usuario y aplicaciones y el #[em hardware]. Para ello, gestiona distintos recursos del sistema, entre los que destacan:

    .row.justify-content-center.mb-5
      .col-lg-4
        .cajon.color-primario.p-4.mt-5
          p La gestión de la CPU a través de la gestión de procesos, con el planificador de procesos y los  distintos algoritmos de planificación.

        .cajon.color-primario.p-3.mt-4
          p La gestión de los dispositivos de E/S.

      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema6/img1.svg", alt="alt").img1-tm6

      .col-lg-3
        .cajon.color-primario.p-3.mt-5
          p La gestión de la memoria con técnicas como la memoria virtual y la paginación.

        .cajon.color-primario.p-3.mt-5
          p La gestión de los sistemas de ficheros.

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4
        figure
          img(src="@/assets/curso/temas/tema6/img2.svg", alt="alt")

      .col-lg-6
        p Los sistemas operativos son muy importantes debido a que permiten facilitar de forma eficaz y eficiente distintas tareas. Entre los cuales existen diferentes clases de sistemas operativos entre los más conocidos están Linux y Windows. La base fundamental de cada sistema operativo es tener un software libre que genere confianza entre el usuario y la máquina dentro de las configuraciones para coordinar las actividades llevando a cabo el intercambio de los recursos y actuando como estación para las aplicaciones que se ejecutan dentro de la máquina

    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4
          p Aprendiz, ha finalizado satisfactoriamente el estudio de las temáticas del componente formativo, lo invitamos a que revise el material complementario y realice la actividad didáctica para que afiance sus conocimientos frente a #[em hardware] y sistema operativo.


</template>

<script>
export default {
  name: 'Tema6',
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
