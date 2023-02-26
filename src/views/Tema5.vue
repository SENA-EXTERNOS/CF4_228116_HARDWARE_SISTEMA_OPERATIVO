<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Herramientas tecnológicas

    .row.mb-5
      p Los sistemas operativos utilizan tres herramientas que se clasifican en:

    .row.mb-5
      .tarjeta.SlyderA-bgr.p-3.p-lg-5
        SlyderA(tipo="b")
          .row
            .col-lg-5.mt-5
              h5 Herramientas de aplicación
              p Se refiere a todo programa que incluya un sistema operativo y que cada usuario pueda desarrollar todas las actividades. Por ejemplo, diseñar dibujos, realizar operaciones, etc.

            .col-lg-7.mt-3
              figure
                img(src="@/assets/curso/temas/tema5/img1.svg", alt="alt")

          .row
            .col-lg-5.mt-5
              h5 Herramientas de configuración
              p Se asocia a los cuadros de información que les permiten a los usuarios conocer las características específicas de cada sistema (equipo) y que puedan ser modificados algunos de los dispositivos #[em hardware], tales como: teclado, pantalla, mouse, entre otros.
              h5 Panel de control
              p En esta configuración se conectan los dispositivos del sistema computacional, desde el cual se pueden modificar e incluso, añadir nuevos dispositivos.


            .col-lg-7.mt-3
              figure
                img(src="@/assets/curso/temas/tema5/img2.svg", alt="alt")

          .row
            .col-lg-5.mt-5
              h5 Herramientas de optimización
              p Se asocia a los programas y aplicaciones que permitan mejorar el rendimiento del sistema como los mencionados a continuación:
              ul.lista-ul--color.p-3.plg-lg-5
                li
                  i.fas.fa-circle.color-vineta1
                  | Desfragmentador de disco.
                li
                  i.fas.fa-circle.color-vineta1
                  | Comprobador de errores (Scandisk).
                li
                  i.fas.fa-circle.color-vineta1
                  | Liberador de espacio en disco.
                li
                  i.fas.fa-circle.color-vineta1
                  | Restaurador del sistema.

            .col-lg-7.mt-3
              figure
                img(src="@/assets/curso/temas/tema5/img3.svg", alt="alt")





</template>

<script>
export default {
  name: 'Tema5',
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
