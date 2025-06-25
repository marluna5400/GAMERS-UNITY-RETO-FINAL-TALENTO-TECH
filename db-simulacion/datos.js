// Inicialización de categorías en localStorage
categorias = {
    "101" : { codigo: "101" , nombre: "CONSOLAS" , descripcion: "Modelos variados de Video Consolas" , imagen: "img/cat101.jpg"},
    "102" : { codigo: "102" , nombre: "CONTROLES" , descripcion: "Perifericos de Consolas, surtidos de colores" , imagen: "img/cat102.jpg"},
    "103" : { codigo: "103" , nombre: "JUEGOS SWITCH", descripcion: "Juegos Nintendo Swicht, tendras de donde escoger" , imagen: "img/cat103.jpg"},
    "104" : { codigo: "104" , nombre: "JUEGOS PS5", descripcion: "Gran surtidos<br>PS5 fisicos y digitales", imagen: "img/cat104.jpg"},
    "105" : { codigo: "105" , nombre: "JUEGOS XBOX" , descripcion: "Tenemos juegos nuevos<br>y clasicos de XBOX" , imagen: "img/cat105.jpg" },
    "106" : { codigo: "106" , nombre: "CONSOLAS RETRO" , descripcion: "Clasicas y sus repectivos juegos", imagen: "img/cat106.jpg"},
    "107" : { codigo: "107" , nombre: "PERSONALIZADOS", descripcion: "Productos personalizados camisetas, gorras, vasos y otros", imagen: "img/cat108.jpg"},
   
   
};

localStorage.setItem("categorias", JSON.stringify(categorias));

banners = {
    "101" : { codigo: "101" , titulo: "Descubre las ultimas novedades" , subtitulo: "Ofrecemos una amplia gama de títulos para diferentes plataformas" , descripcion:" Camisetas, gorras, funko pops, llaveros y otros" , imagen: "./img/ban108.png" },
    "103" : { codigo: "103" , titulo: "Participa en los sorteos de clientes fieles" , subtitulo: "Participa en rifas semanales articulos personalizados." , descripcion: "Nos preocupamos por entender las necesidades individuales de cada cliente." , imagen: "./img/ban109.png"},
    "104" : { codigo: "104" , titulo: "Servicio técnico especializado" , subtitulo: "Contamos con un equipo técnico capacitado para brindar soluciones a problemas complejos en consolas y otros dispositivos relacionados con videojuegos.", descripcion: "Gran surtido de repuestos originales" , imagen: "./img/ban106.png"},
    "105" : { codigo: "105" , titulo: "LLena el formulario" , subtitulo: "Participa en rifas semanales de articulos personalizados<br>el mundo de los video juegos es fabuloso" , descripcion: "Productos y servicios de la más alta calidad,<br>¡Únete a nuestra comunidad y descubre todo lo que tenemos para ofrecerte!<br>Ofrecemos una amplia gama de títulos para diferentes plataformas, desde los lanzamientos más recientes hasta clásicos atemporales. " , imagen: "./img/ban111.png"},
    "106" : { codigo: "106" , titulo: "Crecimiento continuo" , subtitulo: "Estamos constantemente actualizándonos<br>sobre las últimas tendencias " , descripcion: "Nos apasiona lo que hacemos y estamos comprometidos a ser tu socio<br>de confianza en el mundo de los videojuegos" , imagen: "./img/ban105.png"},

    
};

localStorage.setItem("banners", JSON.stringify(banners));


productos = {
    "1011" : { codigo: "1011" , nombre: "PS5" , descripcion: "Consola PS5 Slim Estandar + 2 Videojuegos, Incluiye Returnal y Ratchet and Clanck " , categoria: "101" , imagen: "img/1011.jpg" , precio: 2299000 , calificacion: 4 },
    "1012" : { codigo: "1012" , nombre: "PS5" , descripcion: "Consola Playstation5 1TB Slim PS5+2Controles+Fc25+GtaV+CargadorDobe" , categoria: "101" , imagen: "img/1012.jpg" , precio: 2299000 , calificacion: 5 },
    "1013" : { codigo: "1013" , nombre: "XBOX SERIE X" , descripcion: "Consola Series X 1 TB Digital" , categoria: "101" , imagen: "img/1013.jpg" , precio: 2659000 , calificacion: 5 },
    "1014" : { codigo: "1014" , nombre: "XBOX SERIE S" , descripcion: "Consola Series S 1 TB" , categoria: "101" , imagen: "img/1014.jpg" , precio: 1643000 , calificacion: 4 },
    "1015" : { codigo: "1015" , nombre: "SWITCH 2" , descripcion: "Consola de video juegos de Nintendo" , categoria: "101" , imagen: "img/1015.jpg" , precio: 3000000 , calificacion: 5 },
    "1016" : { codigo: "1016" , nombre: "SWITCH OLED" , descripcion: " Consola Switch Oled Incluye Mario Kart 8" , categoria: "101" , imagen: "img/1016.jpg" , precio: 2390000 , calificacion: 4 },
    "1017" : { codigo: "1017" , nombre: "CONSOLA GAMER LEGION" , descripcion: "Consola portatil AMD Ryzen 16 gb de ram white" , categoria: "101" , imagen: "img/1017.jpg" , precio: 2719900 , calificacion: 5 },
    "1018" : { codigo: "1018" , nombre: "CONSOLA  " , descripcion: "Consola Switch Oled Blanca + Mario Kart 8" , categoria: "101" , imagen: "img/1018.jpg" , precio: 2719900 , calificacion: 5 },
    "1019" : { codigo: "1019" , nombre: "CONSOLA GAMER LEGION" , descripcion: "Nintendo Switch Oled Neon Con Juego Donkey Kong" , categoria: "101" , imagen: "img/1019.jpg" , precio: 2719900 , calificacion: 5 },


    "1021" : { codigo: "1021" , nombre: "CONTROL PS5" , descripcion: "Control PS5 Dualsense Star Light Blue Americano" , categoria: "102" , imagen: "img/1021.jpg" , precio: 269000 , calificacion: 5 },
    "1022" : { codigo: "1022" , nombre: "CONTROL PS5" , descripcion: "Control PS5 Dualsense Edge Hunt<br>Latam" , categoria: "102" , imagen: "img/1022.jpg" , precio: 958000 , calificacion: 5 },
    "1023" : { codigo: "1023" , nombre: "CONTROL XBOX" , descripcion: "Control oystick wireless Original Blue" , categoria: "102" , imagen: "img/1023.jpg" , precio: 2299000 , calificacion: 5 },
    "1024" : { codigo: "1024" , nombre: "CONTROL XBOX" , descripcion: "Control Joystick wireless Original Red" , categoria: "102" , imagen: "img/1024.jpg" , precio: 2299000 , calificacion: 5 },
    "1025" : { codigo: "1025" , nombre: "CONTROL SWITCH" , descripcion: "Control joystick Inalámbrico Edición Monster" , categoria: "102" , imagen: "img/1025.jpg" , precio: 2299000 , calificacion: 5 },
    "1026" : { codigo: "1026" , nombre: "CONTROL SWITCH" , descripcion: "Control joy-con Azul Amarrillo L Y R" , categoria: "102" , imagen: "img/1026.jpg" , precio: 2299000 , calificacion: 5 },
    "1027" : { codigo: "1027" , nombre: "CONTROL SWITCH" , descripcion: "Control inhalambrico versión negro + dorado Dragon" , categoria: "102" , imagen: "img/1027.jpg" , precio: 2299000 , calificacion: 5 },
    "1028" : { codigo: "1028" , nombre: "CONTROL SWITCH" , descripcion: "Control Wireless<br> Hori Pad<br>Mario" , categoria: "102" , imagen: "img/1028.jpg" , precio: 2299000 , calificacion: 5 },
    "1029" : { codigo: "1029" , nombre: "CONTROL SWITCH" , descripcion: "Control Nintendo Switch Pro Control Edicion Zelda" , categoria: "102" , imagen: "img/1029.jpg" , precio: 2299000 , calificacion: 5 },

    
    "1031" : { codigo: "1031" , nombre: "JUEGO DE SWITCH" , descripcion: "Juego Super Mario Party Jamboree " , categoria: "103" , imagen: "img/1031.jpg" , precio: 229900 , calificacion: 5 },
    "1032" : { codigo: "1032" , nombre: "JUEGO DE SWITCH" , descripcion: "Juego Luigi's Mansion 3 " , categoria: "103" , imagen: "img/1032.jpg" , precio: 239900 , calificacion: 5 },
    "1033" : { codigo: "1033" , nombre: "JUEGO DE SWITCH" , descripcion: "Juego Mario kart 8 deluxe " , categoria: "103" , imagen: "img/1033.jpg" , precio: 209900 , calificacion: 5 },
    "1034" : { codigo: "1034" , nombre: "JUEGO DE SWITCH" , descripcion: "Juego Super Mario Wonder Juego SWITCH " , categoria: "103" , imagen: "img/1034.jpg" , precio: 229900 , calificacion: 5 },
    "1035" : { codigo: "1035" , nombre: "JUEGO DE SWITCH" , descripcion: "The Legend Of Zelda Tears Of The Kingdom" , categoria: "103" , imagen: "img/1035.jpg" , precio: 229900 , calificacion: 5 },
    "1036" : { codigo: "1036" , nombre: "JUEGO DE SWITCH" , descripcion: "Mortal Kombat 11 Nintendo Switch Juego" , categoria: "103" , imagen: "img/1036.jpg" , precio: 229900 , calificacion: 5 },
    "1037" : { codigo: "1037" , nombre: "JUEGO DE SWITCH" , descripcion: "Juego Mario & Luigi BrothershipNintendo Switch" , categoria: "103" , imagen: "img/1037.jpg" , precio: 229900 , calificacion: 5 },
    "1038" : { codigo: "1038" , nombre: "JUEGO DE SWITCH" , descripcion: "Super Smash Bros Ultimate Nintendo Switch" , categoria: "103" , imagen: "img/1038.jpg" , precio: 229900 , calificacion: 5 },
    "1039" : { codigo: "1039" , nombre: "JUEGO DE SWITCH" , descripcion: "Minecraft Nintendo Switch Juego" , categoria: "103" , imagen: "img/1039.jpg" , precio: 229900 , calificacion: 5 },



    "1041" : { codigo: "1041" , nombre: "JUEGO PS5" , descripcion: "God of War Ragnarok PS5" , categoria: "104" , imagen: "img/1041.jpg" , precio: 189900 , calificacion: 5 },
    "1042" : { codigo: "1042" , nombre: "JUEGO PS5" , descripcion: "Helldivers II PlayStation 5" , categoria: "104" , imagen: "img/1042.jpg" , precio: 164900 , calificacion: 4 },
    "1043" : { codigo: "1043" , nombre: "JUEGO PS5" , descripcion: "Fc 25 Play 5 EA Sports Fisico Español Latino" , categoria: "104" , imagen: "img/1043.jpg" , precio: 175000 , calificacion: 5 },
    "1044" : { codigo: "1044" , nombre: "JUEGO PS5" , descripcion: "Black Myth Wukong Físico Juego Playstation 5" , categoria: "104" , imagen: "img/1044.jpg" , precio: 304000 , calificacion: 4 },
    "1045" : { codigo: "1045" , nombre: "JUEGO PS5" , descripcion: "Juego PS5 Until Down" , categoria: "104" , imagen: "img/1045.jpg" , precio: 99000 , calificacion: 4 },
    "1046" : { codigo: "1046" , nombre: "JUEGO PS5" , descripcion: "Mortal Kombat 11 Ultimate PS5" , categoria: "104" , imagen: "img/1046.jpg" , precio: 169900 , calificacion: 4 },
    "1047" : { codigo: "1047" , nombre: "JUEGO PS5" , descripcion: "Gran Turismo 7 PS5 Juego Playstation 5" , categoria: "104" , imagen: "img/1047.jpg" , precio: 2299000 , calificacion: 4 },
    "1048" : { codigo: "1048" , nombre: "JUEGO PS5" , descripcion: "Uncharted Coleccion Ps5 Juego Playstation 5" , categoria: "104" , imagen: "img/1048.jpg" , precio: 254900 , calificacion: 4 },
    "1049" : { codigo: "1049" , nombre: "JUEGO PS5" , descripcion: "Dragon Ball Sparking Zero Juego PS5" , categoria: "104" , imagen: "img/1049.jpg" , precio: 267900 , calificacion: 4 },
    
    
    "1051" : { codigo: "1051" , nombre: "JUEGOS XBOX" , descripcion: "Crash bandicoot 4 Xbox Series X Xbox One" , categoria: "105" , imagen: "img/1051.jpg" , precio: 100000 , calificacion: 4 },
    "1052" : { codigo: "1052" , nombre: "JUEGOS XBOX" , descripcion: "Plants VS Zombies Battle For Neighborville XB1" , categoria: "105" , imagen: "img/1052.jpg" , precio: 23900 , calificacion: 4 },
    "1053" : { codigo: "1053" , nombre: "JUEGOS XBOX" , descripcion: "The Witcher 3 Complete Edition Xbox Series X-s" , categoria: "105" , imagen: "img/1053.jpg" , precio: 179900 , calificacion: 4 },
    "1054" : { codigo: "1054" , nombre: "JUEGOS XBOX" , descripcion: "Assassins Creed Valhalla Standard Edition Series XS Xbox One" , categoria: "105" , imagen: "img/1054.jpg" , precio: 124900 , calificacion: 4 },
    "1055" : { codigo: "1055" , nombre: "JUEGOS XBOX" , descripcion: "Avatar Frontiers of Pandora - Xbox Series X" , categoria: "105" , imagen: "img/1055.jpg" , precio: 389000 , calificacion: 4 },
    "1056" : { codigo: "1056" , nombre: "JUEGOS XBOX" , descripcion: "Sonic Frontiers Xbox One Xbox Series Xs" , categoria: "105" , imagen: "img/1056.jpg" , precio: 139999 , calificacion: 4 },
    "1057" : { codigo: "1057" , nombre: "JUEGOS XBOX" , descripcion: "EXOPRIMAL - Xbox Series X & Xbox One" , categoria: "105" , imagen: "img/1057.jpg" , precio: 319900, calificacion: 4 },
    "1058" : { codigo: "1058" , nombre: "JUEGOS XBOX" , descripcion: "Guardians of the galaxy - xbox series xxbox one" , categoria: "105" , imagen: "img/1058.jpg" , precio: 289900, calificacion: 4 },
    "1059" : { codigo: "1059" , nombre: "JUEGOS XBOX" , descripcion: "Metáfora ReFantazio - Xbox Series X" , categoria: "105" , imagen: "img/1059.jpg" , precio: 429900, calificacion: 4 },


    "1061" : { codigo: "1061" , nombre: "Consola Retro" , descripcion: "Consola Portátil GAME STICK" , categoria: "106" , imagen: "img/1061.jpg" , precio: 2299000 , calificacion: 4 },
    "1062" : { codigo: "1062" , nombre: "Consola Retro" , descripcion: "Consola Sony PlayStation Classic 20 juegos 2 Controles" , categoria: "106" , imagen: "img/1062.jpg" , precio: 629900 , calificacion: 4 },
    "1063" : { codigo: "1063" , nombre: "Consola Retro" , descripcion: "Consola Retro Portatil Inalambrica R36s Alta Definicion Emuladores" , categoria: "106" , imagen: "img/1063.jpg" , precio: 2299000 , calificacion: 4 },
    "1064" : { codigo: "1064" , nombre: "Consola Retro" , descripcion: "Consola De Juegos Clasica Family Computer 8Bit + Cassette 132 En 1" , categoria: "106" , imagen: "img/1064.jpg" , precio: 100000 , calificacion: 4 },
    "1065" : { codigo: "1065" , nombre: "Consola Retro" , descripcion: "Consola de Juegos Android TV Box Game + 2 Controles Inalámbricos Dg-80" , categoria: "106" , imagen: "img/1065.jpg" , precio: 138900 , calificacion: 4 },
    "1066" : { codigo: "1066" , nombre: "Consola Retro" , descripcion: "Consola de Juegos Arcade Box Ad 1900 Clásica" , categoria: "106" , imagen: "img/1066.jpg" , precio: 264900 , calificacion: 4 },
    "1067" : { codigo: "1067" , nombre: "Consola Retro" , descripcion: "Proyector De Video Con Consola De Juegos Y Controles" , categoria: "106" , imagen: "img/1067.jpg" , precio: 399900 , calificacion: 4 },

    "1071" : { codigo: "1071" , nombre: "FUNKO POP" , descripcion: "Funko POP Marvel nos da a conocer a Deadpool" , categoria: "107" , imagen: "img/1071.png" , precio: 80000 , calificacion: 4 },
    "1072" : { codigo: "1072" , nombre: "FUNKO POP" , descripcion: "Batman / Superman Fusion Summer Convention" , categoria: "107" , imagen: "img/1072.jpg" , precio: 80000 , calificacion: 4 },
    "1073" : { codigo: "1073" , nombre: "FUNKO POP" , descripcion: "Aang 6″ Avatar: The Last Airbender  1806  Funko Pop!" , categoria: "107" , imagen: "img/1073.jpg" , precio: 80000 , calificacion: 4 },
    "1074" : { codigo: "1074" , nombre: "FUNKO POP" , descripcion: "Ahsoka con Sable Star Wars: The Mandalorian" , categoria: "107" , imagen: "img/1074.jpg" , precio: 80000 , calificacion: 4 },
    "1075" : { codigo: "1075" , nombre: "FUNKO POP" , descripcion: "Alegría  Intensamente 2  1451  Funko Pop!" , categoria: "107" , imagen: "img/1075.jpg" , precio: 85000 , calificacion: 4 },
    "1076" : { codigo: "1076" , nombre: "FUNKO POP" , descripcion: "Alucard  Castlevania Nocturne  1961  Funko Pop!" , categoria: "107" , imagen: "img/1076.jpg" , precio: 85000 , calificacion: 4 },
    "1077" : { codigo: "1077" , nombre: "FUNKO POP" , descripcion: "Annabelle Comes Home 790 Funko Pop!" , categoria: "107" , imagen: "img/1077.jpg" , precio: 80000 , calificacion: 4 },




   

    
    

};

localStorage.setItem("productos", JSON.stringify(productos));

    
