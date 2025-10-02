
export type CheeseBoard = {
  id: number;
  line: 'Cajas' | 'Tablas Premium';
  name: string;
  description: string;
  image: string;
  gallery: string[];
  dataAiHint: string;
  cheeses: string[];
  fruits: string[];
  accompaniments: string[];
  serving: string;
  dimensions?: string;
  tags: string[];
};

export const cheeseBoards: CheeseBoard[] = [
  {
    "id": 1,
    "line": "Cajas",
    "name": "Set de 12 Vasos",
    "description": "Vasos individuales con una cobinacion iconica de ingredientes perfectos para tu paladar. Ideal para cualquier evento o reunion.",
    "image": "/Imagen/Conos/IMG_5197.JPG",
    "gallery": "/Imagen/Conos/IMG_5197.JPG|/Imagen/Conos/IMG_5202.JPG|/Imagen/Conos/IMG_5219.JPG|/Imagen/Conos/IMG_5227.JPG",
    "dataAiHint": "conos de queso",
    "cheeses": "Cheddar  y/o manchego y/o Gouda",
    "fruits": "Uvas/ Blueberries / zarzamoras / Fresa  / Chabacano.",
    "Carnes frias": "Jamon serrano 15 meses de maduraci�n, Salami seco estilo italiano.",
    "accompaniments": "Galleta integral, Aceitunas, Mix de nueces y/o pistaches, Pretzel saldo, Pretzel chocolate blanco.",
    "serving": "12 personas",
    "dimensions": "Tama�o unico",
    "tags": "evento|individual|conos",
    "precio sin botella de vino tinto": "1,450.00",
    "precio con botella de vino tinto": "No incluye tinto"
  },
  {
    "id": 2,
    "line": "Cajas",
    "name": "Box Pareja",
    "description": "Una selecci�n equilibrada y deliciosa, perfecta para compartir en pareja con un beso estilo franc�s.",
    "image": "/Imagen/Caja1/IMG_5247.JPG",
    "gallery": "/Imagen/Caja1/IMG_5247.JPG|/Imagen/Caja1/IMG_5250.JPG|/Imagen/Caja1/IMG_5257.JPG|/Imagen/Caja1/IMG_5260.JPG",
    "dataAiHint": "caja de queso mediana",
    "cheeses": "Cheddar  y/o manchego y/o Gouda",
    "fruits": "Uvas/ Blueberries / Zarzamoras / Frambuesas / Fresa / Higo / Chabacano. ( Frutas de temporada )",
    "Carnes frias": "Jamon serrano 15 meses de maduraci�n, Salami seco estilo italiano.",
    "accompaniments": "Galletas integrales, Miel de abeja, Ate de membrillo, Pretzel, Nueces � Pistaches.",
    "serving": "1 a 2 personas",
    "dimensions": "17x17 cm",
    "tags": "mediana|reunión|compartir",
    "precio sin botella de vino tinto": 575,
    "precio con botella de vino tinto": 700
  },
  {
    "id": 3,
    "line": "Cajas",
    "name": "Box Mediano",
    "description": "Ideal para reuniones entre amigos y/o familiares, esta caja esta llena de una variedad de sabores para complacer a todos",
    "image": "/Imagen/Caja grande/1.jpg",
    "gallery": "/Imagen/Caja grande/1.jpg|/Imagen/Caja grande/2.jpg|/Imagen/Caja grande/3.jpg|/Imagen/Caja grande/4.jpg|/Imagen/Caja grande/5.jpg|/Imagen/Caja grande/6.jpg",
    "dataAiHint": "caja de queso grande",
    "cheeses": "Esferas de queso crema con arandano � nuez, Cheddar  y/o manchego y/o Gouda.",
    "fruits": "Uvas / Blueberries / Zarzamoras / Frambuesas / Fresa / Higo / Chabacano. ( Frutas de temporada )",
    "Carnes frias": "Jamon serrano 15 meses de maduraci�n, Salami seco estilo italiano.",
    "accompaniments": "Galletas integrales, Aceitunas , Miel de abeja, Ate de membrillo, Pretzel, aceitunas, Nueces y pistaches",
    "serving": "3 a 5 personas",
    "dimensions": "22x26 cm",
    "tags": "grande|celebración|fiesta",
    "precio sin botella de vino tinto": 925,
    "precio con botella de vino tinto": "1,050.00"
  },
  {
    "id": 4,
    "line": "Tablas Premium",
    "name": "Tabla Chica",
    "description": "Una tabla elegante y sofisticada para momentos intimos con sabores intensos y refinados.",
    "image": "/Imagen/ProductosAldo/32.jpg",
    "gallery": "/Imagen/ProductosAldo/32.jpg|/Imagen/ProductosAldo/33.jpg|/Imagen/ProductosAldo/31.jpg|/Imagen/ProductosAldo/11.jpg",
    "dataAiHint": "tabla de queso chica",
    "cheeses": "Brie y/o Camembert, Esferas de queso crema con arandanos,  Cheddar y/o manchego y/o Gouda.",
    "fruits": "Uvas/ Kiwi / Blueberries / Zarzamoras / Frambuesas / Fresa / Higo/ chabacano. ( Frutas de temporada )",
    "Carnes frias": "Jamon serrano 15 meses de maduraci�n, Salami seco estilo italiano y/o chorizo espa�ol.",
    "accompaniments": "Galletas integrales, Aceitunas , Miel de abeja, Ate de membrillo, Pretzel, Nueces y pistaches.",
    "serving": "3 a 5 personas",
    "dimensions": "20x30 cm",
    "tags": "premium|chica|intenso",
    "precio sin botella de vino tinto": "1,175.00",
    "precio con botella de vino tinto": "1,300.00"
  },
  {
    "id": 5,
    "line": "Tablas Premium",
    "name": "Tabla Mediana",
    "description": "Una de nuestras tablas mas lujosas, dise�anada para ser el centro de atenci�n de cualquier evento. Un fest�n para la vista y el paladar.",
    "image": "/Imagen/ProductosAldo/11.jpg",
    "gallery": "/Imagen/ProductosAldo/11.jpg|/Imagen/ProductosAldo/12.jpg|/Imagen/ProductosAldo/13.jpg|/Imagen/ProductosAldo/14.jpg",
    "dataAiHint": "tabla de queso premium mediana",
    "cheeses": "Brie y/o camembert, Esferas de queso crema con arandanos o nuez,  Cheddar y/o manchego y/o Gouda.",
    "fruits": "Uvas/ Kiwi / Blueberries / Zarzamoras / Frambuesas / Fresa / Higo/ chabacano. ( Frutas de temporada )",
    "Carnes frias": "Jamon serrano 15 meses de maduraci�n, Salami seco estilo italiano y/o chorizo espa�ol.",
    "accompaniments": "Galletas integrales, Aceitunas , Miel de abeja, Ate de membrillo, Pretzel, Nueces y pistaches.",
    "serving": "6 a 8 personas",
    "dimensions": "40x22 cm",
    "tags": "premium|mediana|francés|gourmet",
    "precio sin botella de vino tinto": "1,425.00",
    "precio con botella de vino tinto": "1,550.00"
  },
  {
    "id": 6,
    "line": "Tablas Premium",
    "name": "Tabla Mediana Fromage",
    "description": "Una experiencia gourmet para los amantes del queso. Con una selecci�n de quesos premium para los paladares mas exigentes.",
    "image": "https://picsum.photos/seed/board1/600/600",
    "gallery": "https://picsum.photos/seed/board1/600/600|https://picsum.photos/seed/board2/600/600|https://picsum.photos/seed/board3/600/600|https://picsum.photos/seed/board4/600/600",
    "dataAiHint": "tabla de queso premium grande",
    "cheeses": "Queso Brie, Queso manchego cavernet sauvignon, Queso Provolone, Queso de Cabra con arandanos, Queso Cheddar, Queso parmesano o Queso Cotija.",
    "fruits": "Uvas/ Kiwi / Blueberries / Zarzamoras / Frambuesas / Fresa / Higo/ chabacano. ( Frutas de temporada )",
    "Carnes frias": "Sin carnes frias.",
    "accompaniments": "Galletas integrales, Palitos de pan con cebolla y pimienta, Aceitunas , Miel de abeja, Mermelada de chabacano, Nueces y pistaches, Almendras con chocolate",
    "serving": "6 a 8 personas",
    "dimensions": "40x22 cm",
    "tags": "premium|grande|lujoso|celebración",
    "precio sin botella de vino tinto": "1,575.00",
    "precio con botella de vino tinto": "1,700.00"
  },
  {
    "id": 7,
    "line": "Ordenes extras",
    "name": "Queso Brie / Camembert",
    "description": "Queso Brie o Camembert. 120 g.",
    "image": "",
    "gallery": "",
    "dataAiHint": "",
    "cheeses": "",
    "fruits": "",
    "Carnes frias": "",
    "accompaniments": "Queso Brie o Camembert.",
    "serving": "",
    "dimensions": "",
    "tags": "",
    "precio sin botella de vino tinto": 240,
    "precio con botella de vino tinto": ""
  },
  {
    "id": 8,
    "line": "Ordenes extras",
    "name": "Jamon Serrano",
    "description": "Jamon serrano 15 meses de maduraci�n. 75 g.",
    "image": "",
    "gallery": "",
    "dataAiHint": "",
    "cheeses": "",
    "fruits": "",
    "Carnes frias": "",
    "accompaniments": "Jamon serrano 15 meses de maduraci�n.",
    "serving": "",
    "dimensions": "",
    "tags": "",
    "precio sin botella de vino tinto": 150,
    "precio con botella de vino tinto": ""
  },
  {
    "id": 9,
    "line": "Ordenes extras",
    "name": "Salami",
    "description": "Salami seco estilo italiano. 75 g.",
    "image": "",
    "gallery": "",
    "dataAiHint": "",
    "cheeses": "",
    "fruits": "",
    "Carnes frias": "",
    "accompaniments": "Salami seco estilo italiano.",
    "serving": "",
    "dimensions": "",
    "tags": "",
    "precio sin botella de vino tinto": 150,
    "precio con botella de vino tinto": ""
  },
  {
    "id": 10,
    "line": "Ordenes extras",
    "name": "Miel de abeja",
    "description": "Miel de abeja 60 ml.",
    "image": "",
    "gallery": "",
    "dataAiHint": "",
    "cheeses": "",
    "fruits": "",
    "Carnes frias": "",
    "accompaniments": "Miel de abeja 60",
    "serving": "",
    "dimensions": "",
    "tags": "",
    "precio sin botella de vino tinto": 60,
    "precio con botella de vino tinto": ""
  },
  {
    "id": 11,
    "line": "Edicion especial",
    "name": "Box Mediano edicion Halloween",
    "description": "Con un dise�o divertido, disfruta de este Box edicion Halloween 2025",
    "image": "",
    "gallery": "",
    "dataAiHint": "",
    "cheeses": "",
    "fruits": "",
    "Carnes frias": "",
    "accompaniments": "",
    "serving": "",
    "dimensions": "",
    "tags": "",
    "precio sin botella de vino tinto": "",
    "precio con botella de vino tinto": ""
  },
  {
    "id": 12,
    "line": "Edicion especial",
    "name": "Navidad y a�o nuevo 2026",
    "description": "Edicion especial navidad 2025",
    "image": "",
    "gallery": "",
    "dataAiHint": "",
    "cheeses": "",
    "fruits": "",
    "Carnes frias": "",
    "accompaniments": "",
    "serving": "",
    "dimensions": "",
    "tags": "",
    "precio sin botella de vino tinto": "",
    "precio con botella de vino tinto": ""
  }
];


export type Testimonial = {
    id: number;
    name: string;
    location: string;
    comment: [string, string, string];
    rating: number;
    productId: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "José García",
    location: "Coyoacán, CDMX",
    comment: ["¡La Caja Mediana fue un ", "éxito", " en mi reunión! La calidad y la presentación son increíbles."],
    rating: 5,
    productId: 2,
  },
  {
    id: 2,
    name: "María Hernández",
    location: "Benito Juárez, CDMX",
    comment: ["Pedí la Tabla Mediana Premium y me transportó a Francia. ¡", "Delicioso", " y súper fresco!"],
    rating: 4,
    productId: 5,
  },
  {
    id: 3,
    name: "Sofía Martínez",
    location: "Miguel Hidalgo, CDMX",
    comment: ["Perfecto para una tarde con amigas. Los conos son muy ", "prácticos", " y elegantes."],
    rating: 5,
    productId: 1,
  },
  {
    id: 4,
    name: "Alejandro López",
    location: "Cuauhtémoc, CDMX",
    comment: ["Si te gusta el queso fuerte, la Tabla Chica Premium es para ti. Una experiencia de sabor ", "única", "."],
    rating: 4,
    productId: 4,
  },
  {
    id: 5,
    name: "Valentina Rodríguez",
    location: "Álvaro Obregón, CDMX",
    comment: ["La Tabla Mediana es pura ", "elegancia", ". Ideal para una cita romántica. ¡Nos encantó!"],
    rating: 5,
    productId: 5,
  },
  {
    id: 6,
    name: "Mateo González",
    location: "Tlalpan, CDMX",
    comment: ["¡La Tabla Grande Premium es ", "espectacular", "! Impresionó a todos mis invitados en la fiesta."],
    rating: 4,
    productId: 6,
  },
   {
    id: 7,
    name: "Camila Flores",
    location: "Iztapalapa, CDMX",
    comment: ["Buena ", "variedad", " en la Caja Grande, aunque me hubiera gustado un poco más de fruta."],
    rating: 5,
    productId: 3,
  },
  {
    id: 8,
    name: "Sebastián Reyes",
    location: "Gustavo A. Madero, CDMX",
    comment: ["Los conos son una idea ", "genial", " para eventos. Todos preguntaron de dónde eran."],
    rating: 4,
    productId: 1,
  },
  {
    id: 9,
    name: "Renata Castillo",
    location: "Azcapotzalco, CDMX",
    comment: ["Muy buena ", "atención", " y el producto llegó perfecto. La calidad de los quesos es notable."],
    rating: 5,
    productId: 2,
  },
  {
    id: 10,
    name: "Diego Jiménez",
    location: "Xochimilco, CDMX",
    comment: ["La tabla llegó a tiempo y muy bien ", "presentada", ". Buen servicio en general."],
    rating: 4,
    productId: 3,
  },
];
