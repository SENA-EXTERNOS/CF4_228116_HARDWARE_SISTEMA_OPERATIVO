(function(e){function a(a){for(var o,i,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6"}[e]||e)+"."+{actividad:"db091f79","chunk-0206bfa0":"7eb1678d","chunk-0c047e41":"da2700f5","chunk-13a6037e":"b9b550ab","chunk-18f95272":"d078ffd9","chunk-25b302c8":"7e764b51","chunk-26fc7596":"0223e8d0","chunk-2c06842c":"ae56870c","chunk-2d0e96ec":"e2ca181d","chunk-2d208d90":"760c08b7","chunk-2d21d0e2":"bfeb6d2c","chunk-2d22c123":"a644a972","chunk-2d2747e2":"013e6804","chunk-2e80bb9a":"24a52a86","chunk-319206de":"4c787e88","chunk-32334cb6":"38590270","chunk-3c57cd7b":"e27cc4b3","chunk-3d6834f6":"a120e877","chunk-4cdd78c0":"49699030","chunk-4f2d402a":"301ae45e","chunk-4fde0a08":"7c15f751","chunk-515a8379":"37cc02fe","chunk-53ccb27e":"98af84a3","chunk-55d286b8":"1e2df45a","chunk-59974754":"6385320f","chunk-6e1e538a":"c4319b8c","chunk-766a929b":"1ad13c3d","chunk-c796899c":"cca6ec61","chunk-e8a7823a":"9f284bb7","chunk-f2df7d2c":"de9c9556","chunk-fde47172":"cdad90b9",comple:"f6ef655a",creditos:"82550b37",glosario:"a4771ef2",intro:"21b3bbaf",referencias:"fd0f4d22",sintesis:"d93c5329",tema1:"22fb05cf",tema2:"8ca3ed20",tema3:"d2604db4",tema4:"7897290e",tema5:"08fbeba1",tema6:"8a21129c"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"14d1f3e8","chunk-515a8379":"fb112014","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"5a00316c","chunk-6e1e538a":"126808df","chunk-766a929b":"f640a861","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"d8ac3902",creditos:"aba783e9",glosario:"43afc64e",intro:"31d6cfe0",referencias:"6b3b9e12",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0",tema6:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===o||l===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),d=Object(s["a"])(c,i,t,!1,null,null,null),l=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}},{path:"tema6",name:"tema6",component:function(){return n.e("tema6").then(n.bind(null,"92ea"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"ef72"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,v=n("1c2c"),g=(n("a3a0"),{global:{componenteFormativo:"<em>Hardware</em> y sistema operativo",descripcionCurso:"El sistema operativo permite interactuar comunicando al usuario y la máquina permitiendo una mejor ejecución de los programas usados en cada dispositivo, brindando una visión general de la evolución de la tecnología aplicada en cada computador entendiendo los conceptos del sistema, servicio y el funcionamiento como tal de cada programa para la configuración de sistemas operativos dependiendo del <em>hardware</em> y cada referencia utilizada para su aplicación.",imagenBannerPrincipal:n("9128"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Configurar el sistema operativo según términos de referencia",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Dispositivos de infraestructura T.I.",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Seleccionar sistemas operativos de servidores y dispositivos",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"<em>Software</em> de virtualización",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Herramientas tecnológicas",desarrolloContenidos:!0},{nombreRuta:"tema6",icono:"far fa-file-alt",numero:"6",titulo:"Gestionar el sistema operativo",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Sistemas operativos",referencia:"Roa, K. (2017). <i>Sistemas operativos.</i> Edu.co. Recuperado de",tipo:"Manual",link:"https://digitk.areandina.edu.co/bitstream/handle/areandina/1313/Sistemas%20operativos.pdf?sequence=1&isAllowed=y "},{tema:"Sistemas operativos modernos ",referencia:"Tanenbaum, A. - (2009). <i>Sistemas operativos 3ra Edición.</i> Recuperado de ",tipo:"Libro",link:"https://apps4two.com/curso_dba/bibliografia/2-Sistemas%20operativos%20moderno%203ed%20Tanenbaum.pdf"},{tema:"Sistemas operativos. Panorama para la ingeniería en computación e informática",referencia:"Sol, D. (2015). <i>Sistemas operativos. Panorama para la ingeniería en computación e informática</i> Recuperado de",tipo:"Libro",link:"https://books.google.com.co/books?id=qdFUCwAAQBAJ&printsec=frontcover&dq=Sistemas+operativos+libros+pdf&hl=es&sa=X&ved=2ahUKEwiMxtCCkNL7AhVTSDABHeTxBeoQ6AF6BAgCEAI#v=onepage&q&f=false"},{tema:"Sistemas informáticos en tiempo real: Teoría y aplicaciones ",referencia:"Jiménez, L.; Puerto, R. (2021). <i>Sistemas informáticos en tiempo real: Teoría y aplicaciones.</i> Recuperado de ",tipo:"Libro",link:"https://books.google.com.co/books?id=WYomDwAAQBAJ&printsec=frontcover&dq=Sistemas+operativos+libros+pdf&hl=es&sa=X&ved=2ahUKEwiMxtCCkNL7AhVTSDABHeTxBeoQ6AF6BAgIEAI#v=onepage&q&f=false"}],glosario:[{termino:"<i>Batch</i>",significado:"en DOS, OS/2 y Microsoft Windows, un archivo <em>batch</em> es un archivo de procesamiento por lotes. Se trata de archivos de texto sin formato, guardados con la extensión .BAT que contienen un conjunto de instrucciones MS-DOS."},{termino:"CPU",significado:" CPU son las siglas de <em>Central Processing Unit</em>, lo que traducido significa “Unidad Central de Procesamiento”. Se trata de uno de los componentes vitales que se encuentran en el computador, el celular, la tableta e, incluso, en relojes y prácticamente cualquier dispositivo electrónico. Sin él simplemente no podrían funcionar"},{termino:"Dispositivo",significado:"es un aparato o mecanismo que desarrolla determinadas acciones. Su nombre está vinculado a que dicho artificio está dispuesto para cumplir con su objetivo."},{termino:"<i>Hardware</i>",significado:"el <i>Hardware</i>, equipo o soporte físico en informática se refiere a las partes físicas, tangibles, de un sistema informático, sus componentes eléctricos, electrónicos, electromecánicos."},{termino:"Interfaz",significado:"interfaz es un término que procede del vocablo inglés <i>interface</i>. En informática, esta noción sirve para señalar a la conexión que se da de manera física y a nivel de utilidad entre dispositivos o sistemas."},{termino:"<i>Kernel</i>",significado:"el <i>Kernel</i> es definido como el núcleo o corazón del sistema operativo, y se encarga principalmente de mediar entre los procesos de usuario y el <em>hardware</em> disponible en la máquina, es decir, concede el acceso al <em>hardware</em>, al <em>software</em> que lo solicite, de una manera segura; y el procesamiento paralelo de varias tareas."},{termino:"<i>Microkernel</i>",significado:"en computación, un micronúcleo es un tipo de núcleo de un sistema operativo que provee un conjunto de primitivas o llamadas mínimas al sistema para implementar servicios básicos como espacios de direcciones, comunicación entre procesos y planificación básica."},{termino:"Multitarea",significado:"la multitarea es la característica de los sistemas operativos modernos que permite que varios procesos o aplicaciones se ejecuten aparentemente al mismo tiempo, compartiendo uno o más procesadores."},{termino:"Multiusuario",significado:"la palabra multiusuario se refiere a una característica de ciertos sistemas operativos, aunque en ocasiones también puede aplicarse <i>software</i> de otro tipo e incluso a sistemas de cómputo."},{termino:"<i>Software</i>",significado:"es una palabra que proviene del idioma inglés, pero que, gracias a la masificación de uso, ha sido aceptada por la Real Academia Española. Según la RAE, el <i>software</i> es un conjunto de programas, instrucciones y reglas informáticas que permiten ejecutar distintas tareas en una computadora."}],referencias:[{referencia:"Alegre, M. P. (2019). <i>Sistemas operativos monopuestos 2.ª edición.</i> Paraninfo. ",link:""},{referencia:"Dyndns.org (S.f.). <i>Concepto de sistemas operativos.</i> Recuperado de",link:"http://ual.dyndns.org/biblioteca/Sistemas_Operativos/Pdf/Unidad_01.pdf"},{referencia:"Definición.de. (S.f.). <i>Definición de software.</i> Recuperado de",link:"https://definicion.de/software/"},{referencia:"Fossati, M. (2017). <i>Introducción a Sistemas Operativos: Conoce el corazón de un SO.</i> Recuperado de",link:"https://books.google.com.co/books?id=BhQkDwAAQBAJ&printsec=frontcover&dq=Sistemas+operativos+libro&hl=es&sa=X&ved=2ahUKEwiy-9qak9L7AhUtmYQIHeg8DkMQ6AF6BAgDEAI#v=onepage&q=Sistemas%20operativos%20libro&f=false"},{referencia:"Microsoft.com. (2022). ¿Qué es un controlador?  Recuperado de",link:"https://learn.microsoft.com/es-es/windows-hardware/drivers/gettingstarted/what-is-a-driver-"},{referencia:"Moro, M.; Sánchez, O. (2016) <i>Sistema Operativo, Búsqueda de la Información: Internet/Intranet y Correo.</i> Recuperado de",link:"https://books.google.com.co/books?id=7A-kCwAAQBAJ&printsec=frontcover&dq=Sistemas+operativos+libro&hl=es&sa=X&redir_esc=y#v=onepage&q=Sistemas%20operativos%20libro&f=false"},{referencia:"Oracle (S.f.). <i>Procedimiento para instalar manualmente los controladores de la estación de trabajo (Guía de instalación del sistema operativo Windows en la estación de trabajo.</i> Recuperado de",link:"https://docs.oracle.com/cd/E19127-01/ultra27.ws/821-0168/giaom/index.html"},{referencia:"Romero, M.; Figueroa, G; Vera, D.; Álava, J.; Parrales, G. Álava, C.; Murillo, Á.; Castillo, M. (2018). <i>Introducción a la seguridad informática y el análisis de vulnerabilidades.</i> Recuperado de ",link:"https://books.google.com.co/books?id=5Z9yDwAAQBAJ&printsec=frontcover&dq=Sistemas+operativos+libro&hl=es&sa=X&ved=2ahUKEwj9mYTblNL7AhX4SDABHSyBCyY4MhDoAXoECAIQAg#v=onepage&q&f=false "},{referencia:"Stallings, W. (1996). <i>Comunicaciones y redes de computadores.</i> Pearson.",link:""}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=g;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:v["a"],render:function(e){return e(l)}}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.f28a0e2c.svg"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.b315a94f.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.cf15ce02.svg"},9128:function(e,a,n){e.exports=n.p+"img/banner-princiapal.3216b7d4.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.b8ee47c1.png"}});
//# sourceMappingURL=app.e012b4ac.js.map