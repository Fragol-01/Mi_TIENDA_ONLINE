import ProductCard from './ProductCard';
import { useTranslation } from 'react-i18next';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  location: string;
  rating: number;
}

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
}

const ProductGrid = ({ products, loading = false }: ProductGridProps) => {
  const { t } = useTranslation();
  
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-48 bg-gray-200 animate-pulse" />
            <div className="p-4">
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-2 w-3/4" />
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-1/2" />
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-full" />
              <div className="flex justify-between items-center">
                <div className="h-6 bg-gray-200 rounded animate-pulse w-1/4" />
                <div className="h-8 bg-gray-200 rounded animate-pulse w-1/4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl text-gray-600 mb-2">{t('productGrid.noProducts')}</h3>
        <p className="text-gray-500">{t('productGrid.tryDifferent')}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard 
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          category={product.category}
          location={product.location}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default ProductGrid;