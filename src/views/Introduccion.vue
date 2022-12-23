<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-lg-11
        .tarjeta--azul1.p-3.p-lg-5
          .row.justify-content-center
            .col-lg-3.mb-4
              figure
                img(src="@/assets/curso/temas/introduccion/img1.svg", alt="alt").img1-intro
            .col-lg-9
              .tarjeta--blanca.p-3.pl-g-4
                .row
                  .col-lg-2
                  .col-lg-10
                    p Aprendiz, esta etapa está diseñada para que aprenda e identifique de manera clara y precisa cómo funcionan estos subsistemas operativos en cada computador y los componentes que lo conforman dentro de los sistemas de infraestructura T.I.
                    p El sistema operativo se describe como la parte que conforma el software donde se dirige y se coordinan todas esas aplicaciones y servicios que cada usuario dispondrá a utilizar en cada computador. Por esta razón, es fundamental e importante el sistema operativo, debido a que se trata de aquellos programas que permiten controlar los aspectos esenciales del sistema. 
                    p Este término se asocia el nombre de kernels o núcleos, donde se ejecuta de forma privilegiada en comparación a lo que comprende el resto de software, sin dejar que cualquier programa vaya a modificar la configuración sobre el que genere un daño sobre su funcionamiento actual.

    .row.justify-content-center.mb-5
      .col-lg-11(data-aos="fade-left")
        p A continuación, lo invitamos a ver el video introductorio donde podrá observar, de manera general, todas las temáticas que estudiará en este componente formativo.  

    .row.justify-content-center.mb-5
      .col-lg-11
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
