import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, ShoppingCart, ChevronRight, Star, User, MapPin, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';
import { fetchProductById, fetchRelatedProducts } from '../services/productService';
import ProductGrid from '../components/products/ProductGrid';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();
  const { t } = useTranslation();

  useEffect(() => {
    const loadData = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const productData = await fetchProductById(id);
        setProduct(productData);
        
        // Load related products
        const related = await fetchRelatedProducts(id, productData.category);
        setRelatedProducts(related);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity
    });
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-200 rounded-lg h-96"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-24 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('productDetail.notFound.title')}</h2>
        <p className="text-gray-600 mb-8">{t('productDetail.notFound.message')}</p>
        <Link 
          to="/products" 
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          {t('productDetail.notFound.browseButton')}
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex mb-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-blue-600 transition-colors">{t('common.home')}</Link>
        <ChevronRight size={16} className="mx-2" />
        <Link to="/products" className="hover:text-blue-600 transition-colors">{t('common.products')}</Link>
        <ChevronRight size={16} className="mx-2" />
        <Link to={`/products?category=${product.category}`} className="hover:text-blue-600 transition-colors">
          {product.category}
        </Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-700 truncate">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div>
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-4">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-auto object-contain aspect-square" 
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  className={`border rounded-md overflow-hidden ${
                    selectedImage === index ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-auto aspect-square object-cover" 
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={18}
                  className={i < Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
                />
              ))}
              <span className="ml-2 text-gray-600">({product.reviews} {t('productDetail.reviews')})</span>
            </div>
            
            <span className="text-gray-500">|</span>
            
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-1" />
              <span>{product.location}</span>
            </div>
          </div>

          <div className="text-3xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</div>

          <div className="border-t border-b border-gray-200 py-6 mb-6">
            <p className="text-gray-700 mb-4">{product.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-start">
                <Clock size={18} className="text-gray-500 mr-2 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-gray-700">{t('productDetail.listed')}</h4>
                  <p className="text-gray-600">2 {t('productDetail.daysAgo')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <User size={18} className="text-gray-500 mr-2 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-gray-700">{t('productDetail.seller')}</h4>
                  <p className="text-blue-600 hover:underline">
                    <Link to={`/seller/${product.seller.id}`}>{product.seller.name}</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-14 px-3 py-2 border-t border-b border-gray-300 text-center"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 border border-gray-300 rounded-r-md bg-gray-50 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            
            <span className="text-sm text-gray-500">
              {product.inStock} {t('productDetail.inStock')}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center"
            >
              <ShoppingCart size={18} className="mr-2" />
              {t('productDetail.addToCart')}
            </button>
            
            <button
              onClick={toggleWishlist}
              className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              aria-label={isWishlisted ? t('productDetail.removeFromWishlist') : t('productDetail.addToWishlist')}
            >
              <Heart 
                size={18} 
                className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-700'} 
              />
            </button>
            
            <button
              className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              aria-label={t('productDetail.share')}
            >
              <Share2 size={18} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('productDetail.relatedProducts')}</h2>
        <ProductGrid products={relatedProducts} />
      </div>
    </div>
  );
};

export default ProductDetailPage;