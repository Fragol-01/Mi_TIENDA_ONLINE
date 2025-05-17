import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { isAuthenticated, user, logout } = useAuth();
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div 
        className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">{t('mobileMenu.menu')}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label={t('mobileMenu.close')}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                onClick={onClose}
              >
                {t('mobileMenu.home')}
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                onClick={onClose}
              >
                {t('mobileMenu.products')}
              </Link>
            </li>
            <li>
              <Link 
                to="/categories" 
                className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                onClick={onClose}
              >
                {t('mobileMenu.categories')}
              </Link>
            </li>
            <li>
              <Link 
                to="/cart" 
                className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                onClick={onClose}
              >
                {t('mobileMenu.cart')}
              </Link>
            </li>

            {isAuthenticated ? (
              <>
                <li>
                  <Link 
                    to="/profile" 
                    className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                    onClick={onClose}
                  >
                    {t('mobileMenu.profile')}
                  </Link>
                </li>
                {user?.role === 'seller' && (
                  <li>
                    <Link 
                      to="/seller-dashboard" 
                      className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                      onClick={onClose}
                    >
                      {t('mobileMenu.sellerDashboard')}
                    </Link>
                  </li>
                )}
                <li>
                  <button 
                    onClick={() => {
                      logout();
                      onClose();
                    }}
                    className="block w-full text-left py-2 text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    {t('mobileMenu.logout')}
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link 
                    to="/login" 
                    className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                    onClick={onClose}
                  >
                    {t('mobileMenu.login')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/register" 
                    className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                    onClick={onClose}
                  >
                    {t('mobileMenu.register')}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <div className="border-t p-4">
          <button 
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => {
              const newLanguage = localStorage.getItem('i18nextLng') === 'es' ? 'en' : 'es';
              localStorage.setItem('i18nextLng', newLanguage);
              window.location.reload();
            }}
          >
            {localStorage.getItem('i18nextLng') === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;