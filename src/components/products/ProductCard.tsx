import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useTranslation } from 'react-i18next';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  location: string;
  rating: number;
}

const ProductCard = ({ id, name, price, image, category, location, rating }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();
  const { t } = useTranslation();

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id,
      name,
      price,
      image,
      quantity: 1
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link to={`/products/${id}`} className="block relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
          {category}
        </span>
        <button 
          onClick={toggleWishlist} 
          className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label={isWishlisted ? t('product.removeFromWishlist') : t('product.addToWishlist')}
        >
          <Heart 
            size={18} 
            className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-500'} 
          />
        </button>
      </Link>
      
      <div className="p-4">
        <Link to={`/products/${id}`} className="block">
          <h3 className="text-lg font-medium text-gray-800 mb-1 line-clamp-1">{name}</h3>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>{location}</span>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-${i < rating ? 'yellow-400' : 'gray-300'}`}>★</span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>
            <button
              onClick={handleAddToCart}
              className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 rounded-md transition-colors"
              aria-label={t('product.addToCart')}
            >
              <ShoppingCart size={16} />
              <span className="sr-only md:not-sr-only md:inline-block">{t('product.addToCart')}</span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;