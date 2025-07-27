export type CheeseBoard = {
  id: number;
  name: string;
  description: string;
  image: string;
  dataAiHint: string;
  cheeses: string[];
  accompaniments: string[];
  serving: string;
  tags: string[];
};

export const cheeseBoards: CheeseBoard[] = [
  {
    id: 1,
    name: "El conocedor clásico",
    description: "Una selección atemporal de quesos clásicos, perfecta para cualquier paladar. Presenta una mezcla equilibrada de texturas duras y blandas.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "queso clásico",
    cheeses: ["Cheddar añejo", "Brie", "Gouda", "Queso azul"],
    accompaniments: ["Galletas saladas", "Mermelada de higos", "Uvas rojas", "Nueces"],
    serving: "2-4",
    tags: ["clásico", "cheddar", "brie", "gouda", "equilibrado", "pequeño"],
  },
  {
    id: 2,
    name: "Delicia Mediterránea",
    description: "Viaja a las costas del Mediterráneo con esta vibrante tabla que presenta quesos y acompañamientos de la región.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "comida mediterranea",
    cheeses: ["Feta", "Manchego", "Halloumi", "Provolone"],
    accompaniments: ["Aceitunas Kalamata", "Tomates secos", "Pan de pita", "Hummus"],
    serving: "3-5",
    tags: ["mediterráneo", "feta", "manchego", "aceitunas", "mediano"],
  },
  {
    id: 3,
    name: "Lo Dulce y Salado",
    description: "Un delicioso viaje de sabores dulces y salados, combinando quesos ricos con frutas y mieles.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "dulce salado",
    cheeses: ["Queso de cabra", "Queso crema con arándanos", "Stilton", "Suizo"],
    accompaniments: ["Rodajas de manzana", "Panal de miel", "Prosciutto", "Chocolate negro"],
    serving: "4-6",
    tags: ["dulce", "salado", "queso de cabra", "fruta", "miel", "grande"],
  },
  {
    id: 4,
    name: "El Audaz y el Azul",
    description: "Para el degustador aventurero, esta tabla es una celebración de quesos azules fuertes, picantes y deliciosos de todo el mundo.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "queso azul",
    cheeses: ["Gorgonzola", "Roquefort", "Stilton", "Danablu"],
    accompaniments: ["Rodajas de pera", "Nueces pecanas confitadas", "Tostadas de centeno", "Mermelada de vino de Oporto"],
    serving: "2-4",
    tags: ["audaz", "queso azul", "fuerte", "gorgonzola", "roquefort", "pequeño"],
  },
  {
    id: 5,
    name: "Beso Francés",
    description: "Una selección elegante y romántica de finos quesos franceses que te transportará a un café parisino.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "comida francesa",
    cheeses: ["Camembert", "Comté", "Chèvre", "Roquefort"],
    accompaniments: ["Baguette", "Cornichons", "Compota de cereza", "Almendras Marcona"],
    serving: "3-5",
    tags: ["francés", "camembert", "comte", "romántico", "mediano"],
  },
  {
    id: 6,
    name: "La Gran Celebración",
    description: "Nuestra tabla más grande y lujosa, diseñada para ser el centro de atención de cualquier fiesta o gran evento. Un verdadero festín para la vista y el paladar.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "fiesta celebración",
    cheeses: ["Parmigiano-Reggiano", "Brie triple crema", "Gouda ahumado", "Gruyère añejo", "Pepper Jack picante"],
    accompaniments: ["Surtido de embutidos", "Panes artesanales", "Aceitunas y encurtidos", "Albaricoques secos", "Selección de mostazas"],
    serving: "8-12",
    tags: ["celebración", "fiesta", "grande", "lujoso", "surtido"],
  },
];


export const testimonials = [
  {
    id: 1,
    name: "José García",
    location: "Coyoacán, CDMX",
    comment: "¡La tabla 'El conocedor clásico' fue un éxito en mi reunión! La calidad es increíble.",
  },
  {
    id: 2,
    name: "María Hernández",
    location: "Benito Juárez, CDMX",
    comment: "Pedí la 'Delicia Mediterránea' y me transportó a Grecia. ¡Delicioso y súper fresco!",
  },
  {
    id: 3,
    name: "Sofía Martínez",
    location: "Miguel Hidalgo, CDMX",
    comment: "Perfecto para una tarde con amigas. La tabla 'Lo Dulce y Salado' es el balance ideal.",
  },
  {
    id: 4,
    name: "Alejandro López",
    location: "Cuauhtémoc, CDMX",
    comment: "Si te gusta el queso fuerte, 'El Audaz y el Azul' es para ti. Una experiencia de sabor única.",
  },
  {
    id: 5,
    name: "Valentina Rodríguez",
    location: "Álvaro Obregón, CDMX",
    comment: "El 'Beso Francés' es pura elegancia. Ideal para una cita romántica. ¡Nos encantó!",
  },
  {
    id: 6,
    name: "Mateo González",
    location: "Tlalpan, CDMX",
    comment: "¡La tabla para la 'Gran Celebración' es espectacular! Impresionó a todos mis invitados.",
  },
];
