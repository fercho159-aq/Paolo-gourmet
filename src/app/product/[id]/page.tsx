
import { cheeseBoards } from '@/lib/data';
import ProductClientPage from './product-client-page';

export async function generateStaticParams() {
  return cheeseBoards.map((board) => ({
    id: board.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const board = cheeseBoards.find(b => b.id.toString() === id);

  if (!board) {
    return <div className="container py-12 text-center">Producto no encontrado</div>;
  }

  return <ProductClientPage board={board} />;
}
