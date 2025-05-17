import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, Search, Globe } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface HeaderProps {
  toggleMobileMenu: () => void;
}

const Header = ({ toggleMobileMenu }: HeaderProps) => {
  const { itemCount } = useCart();
  const { isAuthenticated, user } = useAuth();
  const { t, i18n } = useTranslation();
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">CubaMarket</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('header.products')}
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('header.categories')}
            </Link>
            <Link to="/sellers" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('header.sellers')}
            </Link>
          </nav>

          {/* Search, Cart, Language, and User Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Search size={22} />
            </button>
            
            <button 
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label={t('header.toggleLanguage')}
            >
              <Globe size={22} />
              <span className="sr-only">{i18n.language === 'es' ? 'EN' : 'ES'}</span>
            </button>
            
            <Link to="/cart" className="text-gray-700 hover:text-blue-600 transition-colors relative">
              <ShoppingCart size={22} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
              <Link to="/profile" className="text-gray-700 hover:text-blue-600 transition-colors">
                <User size={22} />
              </Link>
            ) : (
              <Link 
                to="/login" 
                className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
              >
                {t('header.login')}
              </Link>
            )}
            
            <button 
              className="md:hidden text-gray-700"
              onClick={toggleMobileMenu}
              aria-label={t('header.menu')}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        
        {/* Search Bar - Conditional Rendering */}
        {searchOpen && (
          <div className="mt-3 transition-all duration-300 ease-in-out">
            <div className="relative">
              <input
                type="text"
                placeholder={t('header.searchPlaceholder')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;