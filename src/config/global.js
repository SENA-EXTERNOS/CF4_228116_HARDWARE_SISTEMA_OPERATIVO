export default {
  global: {
    componenteFormativo: 'Hardware y sistema operativo',
    descripcionCurso:
      'El sistema operativo permite interactuar comunicando al usuario y la máquina permitiendo una mejor ejecución de los programas usados en cada dispositivo, brindando una visión general de la evolución de la tecnología aplicada en cada computador entendiendo los conceptos del sistema, servicio y el funcionamiento como tal de cada programa para la configuración de sistemas operativos dependiendo del hardware y cada referencia utilizada para su aplicación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Configurar el sistema operativo según términos de referencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '1.1 Sistemas operativos por servicios (visión externa):',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              '1.2 Sistemas operativos por la forma de ofrecer sus servicios',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Dispositivos de infraestructura T.I.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Seleccionar sistemas operativos de servidores y dispositivos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Software de virtualización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Herramientas tecnológicas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Gestionar el sistema operativo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Sistemas operativos',
      referencia:
        'Roa, K. (2017). <i>Sistemas operativos.</i> Edu.co. Recuperado de',
      tipo: 'Manual',
      link:
        'https://digitk.areandina.edu.co/bitstream/handle/areandina/1313/Sistemas%20operativos.pdf?sequence=1&isAllowed=y ',
    },
    {
      tema: 'Sistemas operativos modernos ',
      referencia:
        'Tanenbaum, A. - (2009). <i>Sistemas operativos 3ra Edición.</i> Recuperado de ',
      tipo: 'Manual',
      link:
        'http://www.uenicmlk.edu.ni/img/biblioteca/ing%20sistema%20%20Sistemas%20Operativos%20Modernos%20-%20Andrew%20S.%20Tanenbaum%20-%203ra%20Edicion.pdf ',
    },
    {
      tema:
        'Sistemas operativos. Panorama para la ingeniería en computación e informática',
      referencia:
        'Sol, D. (2015). <i>Sistemas operativos. Panorama para la ingeniería en computación e informática</i> Recuperado de',
      tipo: 'Libro',
      link:
        'https://books.google.com.co/books?id=qdFUCwAAQBAJ&printsec=frontcover&dq=Sistemas+operativos+libros+pdf&hl=es&sa=X&ved=2ahUKEwiMxtCCkNL7AhVTSDABHeTxBeoQ6AF6BAgCEAI#v=onepage&q&f=false',
    },
    {
      tema: 'Sistemas informáticos en tiempo real: Teoría y aplicaciones ',
      referencia:
        'Jiménez, L.; Puerto, R. (2021). <i>Sistemas informáticos en tiempo real: Teoría y aplicaciones.</i> Recuperado de ',
      tipo: 'Libro',
      link:
        'https://books.google.com.co/books?id=WYomDwAAQBAJ&printsec=frontcover&dq=Sistemas+operativos+libros+pdf&hl=es&sa=X&ved=2ahUKEwiMxtCCkNL7AhVTSDABHeTxBeoQ6AF6BAgIEAI#v=onepage&q&f=false',
    },
  ],
  glosario: [
    {
      termino: '<i>Batch</i>',
      significado:
        'en DOS, OS/2 y Microsoft Windows, un archivo <i>batch</i> es un archivo de procesamiento por lotes. Se trata de archivos de texto sin formato, guardados con la extensión .BAT que contienen un conjunto de instrucciones MS-DOS.',
    },
    {
      termino: 'CPU',
      significado:
        'CPU son las siglas de Central Processing <i>Unit</i>, lo que traducido significa “Unidad Central de Procesamiento”. Se trata de uno de los componentes vitales que se encuentran en el computador, el celular, la tableta e, incluso, en relojes y prácticamente cualquier dispositivo electrónico. Sin él simplemente no podrían funcionar',
    },
    {
      termino: 'Dispositivo',
      significado:
        'es un aparato o mecanismo que desarrolla determinadas acciones. Su nombre está vinculado a que dicho artificio está dispuesto para cumplir con su objetivo.',
    },
    {
      termino: '<i>Hardware</i>',
      significado:
        'el <i>Hardware</i>, equipo o soporte físico en informática se refiere a las partes físicas, tangibles, de un sistema informático, sus componentes eléctricos, electrónicos, electromecánicos.',
    },
    {
      termino: 'Interfaz',
      significado:
        'interfaz es un término que procede del vocablo inglés <i>interface</i>. En informática, esta noción sirve para señalar a la conexión que se da de manera física y a nivel de utilidad entre dispositivos o sistemas.',
    },
    {
      termino: '<i>Kernel</i>',
      significado:
        'el <i>Kernel</i> es definido como el núcleo o corazón del sistema operativo, y se encarga principalmente de mediar entre los procesos de usuario y el hardware disponible en la máquina, es decir, concede el acceso al hardware, al software que lo solicite, de una manera segura; y el procesamiento paralelo de varias tareas.',
    },
    {
      termino: '<i>Microkernel</i>',
      significado:
        'en computación, un micronúcleo es un tipo de núcleo de un sistema operativo que provee un conjunto de primitivas o llamadas mínimas al sistema para implementar servicios básicos como espacios de direcciones, comunicación entre procesos y planificación básica.',
    },
    {
      termino: 'Multitarea',
      significado:
        'la multitarea es la característica de los sistemas operativos modernos que permite que varios procesos o aplicaciones se ejecuten aparentemente al mismo tiempo, compartiendo uno o más procesadores.',
    },
    {
      termino: 'Multiusuario',
      significado:
        'la palabra multiusuario se refiere a una característica de ciertos sistemas operativos, aunque en ocasiones también puede aplicarse <i>software</i> de otro tipo e incluso a sistemas de cómputo.',
    },
    {
      termino: '<i>Software</i>',
      significado:
        'es una palabra que proviene del idioma inglés, pero que, gracias a la masificación de uso, ha sido aceptada por la Real Academia Española. Según la RAE, el <i>software</i> es un conjunto de programas, instrucciones y reglas informáticas que permiten ejecutar distintas tareas en una computadora.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alegre, M. P. (2019). <i>Sistemas operativos monopuestos 2.ª edición.</i> Paraninfo. ',
      link: '',
    },
    {
      referencia:
        'Dyndns.org (S.f.). <i>Concepto de sistemas operativos.</i> Recuperado de',
      link:
        'http://ual.dyndns.org/biblioteca/Sistemas_Operativos/Pdf/Unidad_01.pdf',
    },
    {
      referencia:
        'Definición.de. (S.f.). <i>Definición de software.</i> Recuperado de',
      link: 'https://definicion.de/software/',
    },
    {
      referencia:
        'Fossati, M. (2017). <i>Introducción a Sistemas Operativos: Conoce el corazón de un SO.</i> Recuperado de',
      link:
        'https://books.google.com.co/books?id=BhQkDwAAQBAJ&printsec=frontcover&dq=Sistemas+operativos+libro&hl=es&sa=X&ved=2ahUKEwiy-9qak9L7AhUtmYQIHeg8DkMQ6AF6BAgDEAI#v=onepage&q=Sistemas%20operativos%20libro&f=false',
    },
    {
      referencia:
        'Microsoft.com. (2022). ¿Qué es un controlador?  Recuperado de',
      link:
        'https://learn.microsoft.com/es-es/windows-hardware/drivers/gettingstarted/what-is-a-driver-',
    },
    {
      referencia:
        'Moro, M.; Sánchez, O. (2016) <i>Sistema Operativo, Búsqueda de la Información: Internet/Intranet y Correo.</i> Recuperado de',
      link:
        'https://books.google.com.co/books?id=7A-kCwAAQBAJ&printsec=frontcover&dq=Sistemas+operativos+libro&hl=es&sa=X&redir_esc=y#v=onepage&q=Sistemas%20operativos%20libro&f=false',
    },
    {
      referencia:
        'Oracle (S.f.). <i>Procedimiento para instalar manualmente los controladores de la estación de trabajo (Guía de instalación del sistema operativo Windows en la estación de trabajo.</i> Recuperado de',
      link:
        'https://docs.oracle.com/cd/E19127-01/ultra27.ws/821-0168/giaom/index.html',
    },
    {
      referencia:
        'Romero, M.; Figueroa, G; Vera, D.; Álava, J.; Parrales, G. Álava, C.; Murillo, Á.; Castillo, M. (2018). <i>Introducción a la seguridad informática y el análisis de vulnerabilidades.</i> Recuperado de ',
      link:
        'https://books.google.com.co/books?id=5Z9yDwAAQBAJ&printsec=frontcover&dq=Sistemas+operativos+libro&hl=es&sa=X&ved=2ahUKEwj9mYTblNL7AhX4SDABHSyBCyY4MhDoAXoECAIQAg#v=onepage&q&f=false ',
    },
    {
      referencia:
        'Stallings, W. (1996). <i>Comunicaciones y redes de computadores.</i> Pearson.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
