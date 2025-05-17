import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, TrendingUp, Tag, MapPin } from 'lucide-react';
import ProductGrid from '../components/products/ProductGrid';
import { useTranslation } from 'react-i18next';
import { fetchFeaturedProducts, fetchCategoryList } from '../services/productService';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          fetchFeaturedProducts(),
          fetchCategoryList()
        ]);
        setFeaturedProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error loading homepage data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                to="/products"
                className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
              >
                {t('home.hero.browseButton')}
              </Link>
              <Link
                to="/register"
                className="bg-transparent hover:bg-blue-700 border border-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                {t('home.hero.sellButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">{t('home.categories.title')}</h2>
            <Link to="/categories" className="text-blue-600 hover:text-blue-800 flex items-center">
              <span>{t('home.categories.viewAll')}</span>
              <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {loading ? (
              Array(6).fill(0).map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center animate-pulse">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
                </div>
              ))
            ) : (
              categories.map((category) => (
                <Link 
                  key={category.id} 
                  to={`/products?category=${category.slug}`}
                  className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <Tag size={20} />
                  </div>
                  <h3 className="font-medium text-gray-800">{category.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{category.count} {t('home.categories.items')}</p>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">{t('home.featured.title')}</h2>
            <Link to="/products" className="text-blue-600 hover:text-blue-800 flex items-center">
              <span>{t('home.featured.viewAll')}</span>
              <ChevronRight size={16} />
            </Link>
          </div>
          
          <ProductGrid products={featuredProducts} loading={loading} />
        </div>
      </section>

      {/* Trending Locations */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">{t('home.locations.title')}</h2>
            <Link to="/locations" className="text-blue-600 hover:text-blue-800 flex items-center">
              <span>{t('home.locations.viewAll')}</span>
              <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Havana', 'Santiago de Cuba', 'Camagüey', 'Holguín'].map((location) => (
              <Link 
                key={location} 
                to={`/products?location=${location}`}
                className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
              >
                <div className="h-32 bg-gray-200 relative">
                  <img 
                    src={`https://via.placeholder.com/400x200?text=${location}`} 
                    alt={location}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-medium">{location}</h3>
                      <div className="flex items-center text-white/80 text-sm">
                        <MapPin size={14} className="mr-1" />
                        <span>100+ {t('home.locations.listings')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {t('home.whyChoose.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('home.whyChoose.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
                title: t('home.whyChoose.reason1.title'),
                description: t('home.whyChoose.reason1.description')
              },
              { 
                icon: <Tag className="w-10 h-10 text-blue-600" />,
                title: t('home.whyChoose.reason2.title'),
                description: t('home.whyChoose.reason2.description')
              },
              { 
                icon: <MapPin className="w-10 h-10 text-blue-600" />,
                title: t('home.whyChoose.reason3.title'),
                description: t('home.whyChoose.reason3.description')
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl text-white font-bold mb-2">
                {t('home.cta.title')}
              </h2>
              <p className="text-blue-100">
                {t('home.cta.subtitle')}
              </p>
            </div>
            <Link
              to="/register"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
            >
              {t('home.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;