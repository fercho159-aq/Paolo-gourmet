
export type CheeseBoard = {
  id: number;
  line: 'Cajas' | 'Tablas Premium';
  name: string;
  description: string;
  image: string;
  gallery: string[];
  dataAiHint: string;
  cheeses: string[];
  accompaniments: string[];
  serving: string;
  dimensions?: string;
  tags: string[];
};

export const cheeseBoards: CheeseBoard[] = [
  {
    id: 1,
    line: "Cajas",
    name: "Set de 12 Conos",
    description: "Vasitos individuales con nuestra icónica combinación de ingredientes Signature, ideales para tus eventos.",
    image: "/Imagen/ProductosAldo/16.jpg",
    gallery: ["/Imagen/ProductosAldo/16.jpg", "/Imagen/ProductosAldo/15.jpg", "/Imagen/ProductosAldo/17.jpg","/Imagen/ProductosAldo/18.jpg"],
    dataAiHint: "conos de queso",
    cheeses: ["Cheddar", "Gouda", "Monterey Jack"],
    accompaniments: ["Chorizo español", "Salami", "Frutas", "Nueces", "Galletas"],
    serving: "6-12",
    dimensions: "22x26 cm",
    tags: ["evento", "individual", "conos"],
  },
  {
    id: 2,
    line: "Cajas",
    name: "Caja Mediana",
    description: "Una selección equilibrada y deliciosa, perfecta para compartir en pequeñas reuniones.",
    image: "/Imagen/Productos/Tabla 2 (1).jpg",
    gallery: ["/Imagen/Productos/Tabla 2 (1).jpg", "/Imagen/Galeria/IMG_0818.jpg", "/Imagen/Galeria/IMG_0852.jpg"],
    dataAiHint: "caja de queso mediana",
    cheeses: ["Manchego", "Provolone", "Queso de cabra"],
    accompaniments: ["Tomates secos", "Aceitunas", "Pan de pita", "Hummus"],
    serving: "1-2",
    dimensions: "22x26 cm",
    tags: ["mediana", "reunión", "compartir"],
  },
  {
    id: 3,
    line: "Cajas",
    name: "Caja Grande",
    description: "Ideal para celebraciones más grandes, esta caja está llena de una variedad de sabores para complacer a todos.",
    image: "/Imagen/Productos/Tabla 3 (1).jpg",
    gallery: ["/Imagen/Productos/Tabla 3 (1).jpg", "/Imagen/Galeria/IMG_0818.jpg", "/Imagen/Galeria/IMG_0852.jpg"],
    dataAiHint: "caja de queso grande",
    cheeses: ["Suizo", "Queso crema con arándanos", "Stilton"],
    accompaniments: ["Rodajas de manzana", "Panal de miel", "Prosciutto", "Chocolate negro"],
    serving: "1-3",
    dimensions: "22x26 cm",
    tags: ["grande", "celebración", "fiesta"],
  },
  {
    id: 4,
    line: "Tablas Premium",
    name: "Tabla Chica",
    description: "Una tabla elegante y sofisticada para momentos íntimos, con sabores intensos y refinados.",
    image: "/Imagen/ProductosAldo/18.jpg",
    gallery: ["/Imagen/ProductosAldo/18.jpg", "/Imagen/ProductosAldo/12.jpg", "/Imagen/ProductosAldo/13.jpg", "/Imagen/ProductosAldo/11.jpg"],
    dataAiHint: "tabla de queso chica",
    cheeses: ["Gorgonzola", "Danablu"],
    accompaniments: ["Rodajas de pera", "Nueces pecanas confitadas", "Tostadas de centeno"],
    serving: "1-2",
    dimensions: "20x30 cm",
    tags: ["premium", "chica", "intenso"],
  },
  {
    id: 5,
    line: "Tablas Premium",
    name: "Tabla grande con carnes frias y quesos",
    description: "Una experiencia gourmet con quesos premium franceses que te transportará a un café parisino.",
    image: "/Imagen/ProductosAldo/11.jpg",
    gallery: ["/Imagen/ProductosAldo/11.jpg", "/Imagen/ProductosAldo/12.jpg", "/Imagen/ProductosAldo/13.jpg", "/Imagen/ProductosAldo/14.jpg"],
    dataAiHint: "tabla de queso premium mediana",
    cheeses: ["Camembert", "Comté", "Chèvre", "Roquefort"],
    accompaniments: ["Baguette", "Cornichons", "Compota de cereza", "Almendras Marcona"],
    serving: "2-3",
    dimensions: "40x22 cm",
    tags: ["premium", "mediana", "francés", "gourmet"],
  },
  {
    id: 6,
    line: "Tablas Premium",
    name: "Tabla grande de solo quesos",
    description: "Nuestra tabla más lujosa, diseñada para ser el centro de atención de cualquier evento. Un festín para la vista y el paladar.",
    image: "/Imagen/Productos/Tabla 3 (1).jpg",
    gallery: ["/Imagen/Productos/Tabla 3 (1).jpg", "/Imagen/Galeria/IMG_0818.jpg", "/Imagen/Galeria/IMG_0852.jpg"],
    dataAiHint: "tabla de queso premium grande",
    cheeses: ["Parmigiano-Reggiano", "Brie triple crema", "Gouda ahumado", "Gruyère añejo"],
    accompaniments: ["Surtido de embutidos", "Panes artesanales", "Aceitunas y encurtidos", "Albaricoques secos"],
    serving: "2-4",
    dimensions: "40x22 cm",
    tags: ["premium", "grande", "lujoso", "celebración"],
  },
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
