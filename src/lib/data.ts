
export type CheeseBoard = {
  id: number;
  line: 'Cajas' | 'Tablas Premium' | 'Ordenes extras' | 'Edicion especial' | 'Letras';
  name: string;
  description: string;
  image: string;
  gallery: string[];
  dataAiHint: string;
  cheeses: string[];
  fruits: string[];
  meats: string[];
  accompaniments: string[];
  serving: string;
  dimensions?: string;
  tags: string[];
  price: number;
  priceWithWine: number | string;
};

export const cheeseBoards: CheeseBoard[] = [
  {
    "id": 1,
    "line": "Cajas",
    "name": "Set de 12 Conos",
    "description": "Vasos individuales con una cobinacion iconica de ingredientes perfectos para tu paladar. Ideal para cualquier evento o reunion.",
    "image": "/Imagen/Conos/IMG_5197.JPG",
    "gallery": ["/Imagen/Conos/IMG_5197.JPG", "/Imagen/Conos/IMG_5202.JPG", "/Imagen/Conos/IMG_5219.JPG", "/Imagen/Conos/IMG_5227.JPG"],
    "dataAiHint": "conos de queso",
    "cheeses": ["Cheddar", "manchego", "Gouda"],
    "fruits": ["Uvas", "Blueberries", "zarzamoras", "Fresa", "Chabacano"],
    "meats": ["Jamon serrano 15 meses de maduración", "Salami seco estilo italiano"],
    "accompaniments": ["Galleta integral", "Aceitunas", "Mix de nueces y/o pistaches", "Pretzel saldo", "Pretzel chocolate blanco"],
    "serving": "12 personas",
    "dimensions": "Tamaño unico",
    "tags": ["evento", "individual", "conos"],
    "price": 1450,
    "priceWithWine": "No incluye tinto"
  },
  {
    "id": 2,
    "line": "Cajas",
    "name": "Box Pareja",
    "description": "Una selección equilibrada y deliciosa, perfecta para compartir en pareja con un beso estilo francés.",
    "image": "/Imagen/Caja1/IMG_5247.JPG",
    "gallery": ["/Imagen/Caja1/IMG_5247.JPG", "/Imagen/Caja1/IMG_5250.JPG", "/Imagen/Caja1/IMG_5257.JPG", "/Imagen/Caja1/IMG_5260.JPG"],
    "dataAiHint": "caja de queso mediana",
    "cheeses": ["Cheddar", "manchego", "Gouda"],
    "fruits": ["Uvas", "Blueberries", "Zarzamoras", "Frambuesas", "Fresa", "Higo", "Chabacano"],
    "meats": ["Jamon serrano 15 meses de maduración", "Salami seco estilo italiano"],
    "accompaniments": ["Galletas integrales", "Miel de abeja", "Ate de membrillo", "Pretzel", "Nueces", "Pistaches"],
    "serving": "1 a 2 personas",
    "dimensions": "17x17 cm",
    "tags": ["mediana", "reunión", "compartir"],
    "price": 575,
    "priceWithWine": 700
  },
  {
    "id": 3,
    "line": "Cajas",
    "name": "Box Mediano",
    "description": "Ideal para reuniones entre amigos y/o familiares, esta caja esta llena de una variedad de sabores para complacer a todos.",
    "image": "/Imagen/Caja grande/1.jpg",
    "gallery": ["/Imagen/Caja grande/1.jpg", "/Imagen/Caja grande/2.jpg", "/Imagen/Caja grande/3.jpg", "/Imagen/Caja grande/4.jpg", "/Imagen/Caja grande/5.jpg", "/Imagen/Caja grande/6.jpg"],
    "dataAiHint": "caja de queso grande",
    "cheeses": ["Esferas de queso crema con arandano ó nuez", "Cheddar", "manchego", "Gouda"],
    "fruits": ["Uvas", "Blueberries", "Zarzamoras", "Frambuesas", "Fresa", "Higo", "Chabacano"],
    "meats": ["Jamon serrano 15 meses de maduración", "Salami seco estilo italiano"],
    "accompaniments": ["Galletas integrales", "Aceitunas", "Miel de abeja", "Ate de membrillo", "Pretzel", "Nueces y pistaches"],
    "serving": "3 a 5 personas",
    "dimensions": "22x26 cm",
    "tags": ["grande", "celebración", "fiesta"],
    "price": 925,
    "priceWithWine": 1050
  },
  {
    "id": 4,
    "line": "Tablas Premium",
    "name": "Tabla Chica",
    "description": "Una tabla elegante y sofisticada para momentos intimos con sabores intensos y refinados. *Nuestras tablas son de madera de pino y están curadas para uso alimenticio. **¡Te la quedas de regalo!***",
    "image": "/Imagen/tabla chica/IMG_3256.jpg",
    "gallery": ["/Imagen/tabla chica/IMG_3256.jpg", "/Imagen/ProductosAldo/33.jpg", "/Imagen/ProductosAldo/31.jpg", "/Imagen/ProductosAldo/11.jpg"],
    "dataAiHint": "tabla de queso chica",
    "cheeses": ["Brie y/o Camembert", "Esferas de queso crema con arandanos", "Cheddar y/o manchego y/o Gouda"],
    "fruits": ["Uvas", "Kiwi", "Blueberries", "Zarzamoras", "Frambuesas", "Fresa", "Higo", "chabacano"],
    "meats": ["Jamon serrano 15 meses de maduración", "Salami seco estilo italiano y/o chorizo español"],
    "accompaniments": ["Galletas integrales", "Aceitunas", "Miel de abeja", "Ate de membrillo", "Pretzel", "Nueces y pistaches"],
    "serving": "3 a 5 personas",
    "dimensions": "20x30 cm",
    "tags": ["premium", "chica", "intenso"],
    "price": 1175,
    "priceWithWine": 1300
  },
  {
    "id": 5,
    "line": "Tablas Premium",
    "name": "Tabla Mediana",
    "description": "Una de nuestras tablas mas lujosas, diseñanada para ser el centro de atención de cualquier evento. Un festín para la vista y el paladar. *Nuestras tablas son de madera de pino y están curadas para uso alimenticio. **¡Te la quedas de regalo!***",
    "image": "/Imagen/ProductosAldo/11.jpg",
    "gallery": ["/Imagen/ProductosAldo/11.jpg", "/Imagen/ProductosAldo/12.jpg", "/Imagen/ProductosAldo/13.jpg", "/Imagen/ProductosAldo/14.jpg"],
    "dataAiHint": "tabla de queso premium mediana",
    "cheeses": ["Brie y/o camembert", "Esferas de queso crema con arandanos o nuez", "Cheddar y/o manchego y/o Gouda"],
    "fruits": ["Uvas", "Kiwi", "Blueberries", "Zarzamoras", "Frambuesas", "Fresa", "Higo", "chabacano"],
    "meats": ["Jamon serrano 15 meses de maduración", "Salami seco estilo italiano y/o chorizo español"],
    "accompaniments": ["Galletas integrales", "Aceitunas", "Miel de abeja", "Ate de membrillo", "Pretzel", "Nueces y pistaches"],
    "serving": "6 a 8 personas",
    "dimensions": "40x22 cm",
    "tags": ["premium", "mediana", "francés", "gourmet"],
    "price": 1425,
    "priceWithWine": 1550
  },
  {
    "id": 6,
    "line": "Tablas Premium",
    "name": "Tabla Mediana Fromage",
    "description": "Una experiencia gourmet para los amantes del queso. Con una selección de quesos premium para los paladares mas exigentes. *Nuestras tablas son de madera de pino y están curadas para uso alimenticio. **¡Te la quedas de regalo!***",
    "image": "/Imagen/ProductosAldo/Premium/1.jpg",
    "gallery": ["/Imagen/ProductosAldo/Premium/1.jpg", "/Imagen/ProductosAldo/Premium/2.jpg", "/Imagen/ProductosAldo/Premium/3.jpg", "/Imagen/ProductosAldo/Premium/4.jpg", "/Imagen/ProductosAldo/Premium/5.jpg"],
    "dataAiHint": "tabla de queso premium grande",
    "cheeses": ["Queso Brie", "Queso manchego cavernet sauvignon", "Queso Provolone", "Queso de Cabra con arandanos", "Queso Cheddar", "Queso parmesano", "Queso Cotija"],
    "fruits": ["Uvas", "Kiwi", "Blueberries", "Zarzamoras", "Frambuesas", "Fresa", "Higo", "chabacano"],
    "meats": [],
    "accompaniments": ["Galletas integrales", "Palitos de pan con cebolla y pimienta", "Aceitunas", "Miel de abeja", "Mermelada de chabacano", "Nueces y pistaches", "Almendras con chocolate"],
    "serving": "6 a 8 personas",
    "dimensions": "40x22 cm",
    "tags": ["premium", "grande", "lujoso", "celebración"],
    "price": 1575,
    "priceWithWine": 1700
  },
  {
    "id": 7,
    "line": "Ordenes extras",
    "name": "Queso Brie / Camembert",
    "description": "Queso Brie o Camembert. 120 g.",
    "image": "https://picsum.photos/seed/brie/600/600",
    "gallery": [],
    "dataAiHint": "queso brie",
    "cheeses": [],
    "fruits": [],
    "meats": [],
    "accompaniments": ["Queso Brie o Camembert"],
    "serving": "120 g.",
    "dimensions": "",
    "tags": [],
    "price": 240,
    "priceWithWine": ""
  },
  {
    "id": 8,
    "line": "Ordenes extras",
    "name": "Jamon Serrano",
    "description": "Jamon serrano 15 meses de maduración. 75 g.",
    "image": "https://picsum.photos/seed/jamon/600/600",
    "gallery": [],
    "dataAiHint": "jamon serrano",
    "cheeses": [],
    "fruits": [],
    "meats": [],
    "accompaniments": ["Jamon serrano 15 meses de maduración"],
    "serving": "75 g.",
    "dimensions": "",
    "tags": [],
    "price": 150,
    "priceWithWine": ""
  },
  {
    "id": 9,
    "line": "Ordenes extras",
    "name": "Salami",
    "description": "Salami seco estilo italiano. 75 g.",
    "image": "https://picsum.photos/seed/salami/600/600",
    "gallery": [],
    "dataAiHint": "salami",
    "cheeses": [],
    "fruits": [],
    "meats": [],
    "accompaniments": ["Salami seco estilo italiano"],
    "serving": "75 g.",
    "dimensions": "",
    "tags": [],
    "price": 150,
    "priceWithWine": ""
  },
  {
    "id": 10,
    "line": "Ordenes extras",
    "name": "Miel de abeja",
    "description": "Miel de abeja 60 ml.",
    "image": "https://picsum.photos/seed/miel/600/600",
    "gallery": [],
    "dataAiHint": "miel",
    "cheeses": [],
    "fruits": [],
    "meats": [],
    "accompaniments": ["Miel de abeja 60ml"],
    "serving": "60 ml.",
    "dimensions": "",
    "tags": [],
    "price": 60,
    "priceWithWine": ""
  },
  {
    "id": 11,
    "line": "Edicion especial",
    "name": "Box Mediano edicion Halloween",
    "description": "Con un diseño divertido, disfruta de este Box edicion Halloween 2025",
    "image": "https://images.unsplash.com/photo-1668094497457-29f4bd775c95?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "gallery": ["https://images.unsplash.com/photo-1668094497457-29f4bd775c95?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "dataAiHint": "halloween cheese board",
    "cheeses": ["Queso de calabaza", "Cheddar negro"],
    "fruits": ["Uvas negras", "Mandarinas"],
    "meats": [],
    "accompaniments": ["Galletas de araña", "Dulces de maíz"],
    "serving": "2-4 personas",
    "dimensions": "20x20 cm",
    "tags": ["halloween", "temporada", "especial"],
    "price": 850,
    "priceWithWine": ""
  },
  {
    "id": 12,
    "line": "Edicion especial",
    "name": "Navidad y año nuevo 2026",
    "description": "Edicion especial navidad 2025",
    "image": "https://images.unsplash.com/photo-1678572823447-45fc146df43c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "gallery": ["https://images.unsplash.com/photo-1678572823447-45fc146df43c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "dataAiHint": "christmas cheese board",
    "cheeses": ["Queso de arándano", "Gouda ahumado"],
    "fruits": ["Granada", "Peras"],
    "meats": ["Pavo en rodajas"],
    "accompaniments": ["Nueces confitadas", "Bastones de caramelo"],
    "serving": "4-6 personas",
    "dimensions": "30x30 cm",
    "tags": ["navidad", "temporada", "fiesta"],
    "price": 1200,
    "priceWithWine": ""
  },
  {
    "id": 13,
    "line": "Letras",
    "name": "Letras para una celebracion especial.",
    "description": "Divertidas letras personalizadas para celebrar cualquier ocasión. Cumpleaños, aniversarios, día de las madres, graduaciones.",
    "image": "/Imagen/tabla chica/IMG_3256.jpg",
    "gallery": [],
    "dataAiHint": "cheese letters",
    "cheeses": [],
    "fruits": [],
    "meats": [],
    "accompaniments": [],
    "serving": "",
    "dimensions": "",
    "tags": ["letras", "personalizado", "celebracion"],
    "price": 0,
    "priceWithWine": ""
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
    "name": "José García",
    "location": "Coyoacán, CDMX",
    "comment": ["¡La Caja Mediana fue un ", "éxito", " en mi reunión! La calidad y la presentación son increíbles."],
    "rating": 5,
    "productId": 3,
  },
  {
    id: 2,
    "name": "María Hernández",
    "location": "Benito Juárez, CDMX",
    "comment": ["Pedí la Tabla Mediana Premium y me transportó a Francia. ¡", "Delicioso", " y súper fresco!"],
    "rating": 4,
    "productId": 5,
  },
  {
    id: 3,
    "name": "Sofía Martínez",
    "location": "Miguel Hidalgo, CDMX",
    "comment": ["Perfecto para una tarde con amigas. Los conos son muy ", "prácticos", " y elegantes."],
    "rating": 5,
    "productId": 1,
  },
  {
    id: 4,
    "name": "Alejandro López",
    "location": "Cuauhtémoc, CDMX",
    "comment": ["Si te gusta el queso fuerte, la Tabla Chica Premium es para ti. Una experiencia de sabor ", "única", "."],
    "rating": 4,
    "productId": 4,
  },
  {
    id: 5,
    "name": "Valentina Rodríguez",
    "location": "Álvaro Obregón, CDMX",
    "comment": ["La Tabla Mediana es pura ", "elegancia", ". Ideal para una cita romántica. ¡Nos encantó!"],
    "rating": 5,
    "productId": 5,
  },
  {
    id: 6,
    "name": "Mateo González",
    "location": "Tlalpan, CDMX",
    "comment": ["¡La Tabla Grande Premium es ", "espectacular", "! Impresionó a todos mis invitados en la fiesta."],
    "rating": 4,
    "productId": 6,
  },
   {
    id: 7,
    "name": "Camila Flores",
    "location": "Iztapalapa, CDMX",
    "comment": ["Buena ", "variedad", " en la Caja Grande, aunque me hubiera gustado un poco más de fruta."],
    "rating": 5,
    "productId": 3,
  },
  {
    id: 8,
    "name": "Sebastián Reyes",
    "location": "Gustavo A. Madero, CDMX",
    "comment": ["Los conos son una idea ", "genial", " para eventos. Todos preguntaron de dónde eran."],
    "rating": 4,
    "productId": 1,
  },
  {
    id: 9,
    "name": "Renata Castillo",
    "location": "Azcapotzalco, CDMX",
    "comment": ["Muy buena ", "atención", " y el producto llegó perfecto. La calidad de los quesos es notable."],
    "rating": 5,
    "productId": 2,
  },
  {
    id: 10,
    "name": "Diego Jiménez",
    "location": "Xochimilco, CDMX",
    "comment": ["La tabla llegó a tiempo y muy bien ", "presentada", ". Buen servicio en general."],
    "rating": 4,
    "productId": 3,
  },
];

    