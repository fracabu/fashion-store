import React from 'react';
import ProductCard from './ProductCard';

// Dati di esempio - in seguito li prenderemo da un'API
const mockProducts = {
    donna: [
      { 
        id: '1', 
        name: 'Cappotto Invernale', 
        price: 129.99, 
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=500&fit=crop', 
        category: 'donna' 
      },
      { 
        id: '2', 
        name: 'Maglione in Cashmere', 
        price: 89.99, 
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop', 
        category: 'donna' 
      },
      { 
        id: '3', 
        name: 'Jeans a Vita Alta', 
        price: 59.99, 
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop', 
        category: 'donna' 
      },
      { 
        id: '4', 
        name: 'Gonna Plissettata', 
        price: 49.99, 
        image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&h=500&fit=crop', 
        category: 'donna' 
      }
    ],
    uomo: [
      { 
        id: '1', 
        name: 'Giacca in Pelle', 
        price: 199.99, 
        image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop', 
        category: 'uomo' 
      },
      { 
        id: '2', 
        name: 'Camicia Oxford', 
        price: 69.99, 
        image: 'https://images.unsplash.com/photo-1563630423918-b58f07336ac5?w=500&h=500&fit=crop', 
        category: 'uomo' 
      },
      { 
        id: '3', 
        name: 'Pantaloni Chino', 
        price: 79.99, 
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=500&fit=crop', 
        category: 'uomo' 
      },
      { 
        id: '4', 
        name: 'Maglione a Collo Alto', 
        price: 89.99, 
        image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&h=500&fit=crop', 
        category: 'uomo' 
      }
    ],
    accessori: [
      { 
        id: '1', 
        name: 'Borsa in Pelle', 
        price: 149.99, 
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop', 
        category: 'accessori' 
      },
      { 
        id: '2', 
        name: 'Cintura in Pelle', 
        price: 39.99, 
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop', 
        category: 'accessori' 
      },
      { 
        id: '3', 
        name: 'Sciarpa in Lana', 
        price: 29.99, 
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop', 
        category: 'accessori' 
      },
      { 
        id: '4', 
        name: 'Portafoglio', 
        price: 49.99, 
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop', 
        category: 'accessori' 
      }
    ]
  };

interface ProductGridProps {
  category: 'donna' | 'uomo' | 'accessori';
}

const ProductGrid = ({ category }: ProductGridProps) => {
  const products = mockProducts[category] || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;