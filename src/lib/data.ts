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
    name: "The Classic Connoisseur",
    description: "A timeless selection of classic cheeses, perfect for any palate. Features a balanced mix of hard and soft textures.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "classic cheese",
    cheeses: ["Aged Cheddar", "Brie", "Gouda", "Blue Cheese"],
    accompaniments: ["Water Crackers", "Fig Jam", "Red Grapes", "Walnuts"],
    serving: "2-4 people",
    tags: ["classic", "cheddar", "brie", "gouda", "balanced", "small"],
  },
  {
    id: 2,
    name: "Mediterranean Delight",
    description: "Travel to the shores of the Mediterranean with this vibrant board featuring cheeses and accompaniments from the region.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "mediterranean food",
    cheeses: ["Feta", "Manchego", "Halloumi", "Provolone"],
    accompaniments: ["Kalamata Olives", "Sun-dried Tomatoes", "Pita Bread", "Hummus"],
    serving: "3-5 people",
    tags: ["mediterranean", "feta", "manchego", "olives", "medium"],
  },
  {
    id: 3,
    name: "The Sweet & Savory",
    description: "A delightful journey of sweet and savory flavors, pairing rich cheeses with fruits and honeys.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "sweet savory",
    cheeses: ["Goat Cheese", "Cream Cheese with Cranberries", "Stilton", "Swiss"],
    accompaniments: ["Apple Slices", "Honeycomb", "Prosciutto", "Dark Chocolate"],
    serving: "4-6 people",
    tags: ["sweet", "savory", "goat cheese", "fruit", "honey", "large"],
  },
  {
    id: 4,
    name: "The Bold & The Blue",
    description: "For the adventurous taster, this board is a celebration of strong, pungent, and delicious blue cheeses from around the world.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "blue cheese",
    cheeses: ["Gorgonzola", "Roquefort", "Stilton", "Danablu"],
    accompaniments: ["Pear Slices", "Candied Pecans", "Rye Crisps", "Port Wine Jam"],
    serving: "2-4 people",
    tags: ["bold", "blue cheese", "strong", "gorgonzola", "roquefort", "small"],
  },
  {
    id: 5,
    name: "French Kiss",
    description: "An elegant and romantic selection of fine French cheeses that will transport you to a Parisian cafe.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "french food",
    cheeses: ["Camembert", "Comté", "Chèvre", "Roquefort"],
    accompaniments: ["Baguette", "Cornichons", "Cherry Compote", "Marcona Almonds"],
    serving: "3-5 people",
    tags: ["french", "camembert", "comte", "romantic", "medium"],
  },
  {
    id: 6,
    name: "The Grand Celebration",
    description: "Our largest and most luxurious board, designed to be the centerpiece of any party or grand event. A true feast for the eyes and palate.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "celebration party",
    cheeses: ["Parmigiano-Reggiano", "Triple Cream Brie", "Smoked Gouda", "Aged Gruyère", "Spicy Pepper Jack"],
    accompaniments: ["Assorted Cured Meats", "Artisanal Breads", "Olives & Pickles", "Dried Apricots", "Mustard Selection"],
    serving: "8-12 people",
    tags: ["celebration", "party", "large", "luxurious", "assortment"],
  },
];


export const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    location: "New York, NY",
    comment: "The Classic Connoisseur board was an absolute hit at my dinner party. The quality and presentation were outstanding!",
  },
  {
    id: 2,
    name: "Carlos Rodriguez",
    location: "Miami, FL",
    comment: "I ordered a custom board for a corporate event, and CheeseBoardly exceeded all expectations. The AI pairing tool is a fantastic touch.",
  },
  {
    id: 3,
    name: "Emily Sato",
    location: "San Francisco, CA",
    comment: "The Mediterranean Delight is my favorite. It’s so fresh and flavorful. Highly recommend for a picnic or a light lunch!",
  },
];
