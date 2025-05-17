import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, ArrowLeft, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';

const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();
  const { isAuthenticated } = useAuth();
  const { t } = useTranslation();
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) {
      setCouponError(t('cart.invalidCoupon'));
      return;
    }
    
    // Simulate coupon validation
    setCouponError(t('cart.invalidCoupon'));
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
          <ShoppingCart size={32} className="text-gray-400" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{t('cart.empty.title')}</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">{t('cart.empty.message')}</p>
        <Link 
          to="/products" 
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          {t('cart.empty.browseButton')}
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">{t('cart.title')}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-gray-800">
                  {t('cart.items', { count: items.length })}
                </h2>
                <button 
                  onClick={clearCart}
                  className="text-sm text-red-500 hover:text-red-700 transition-colors"
                >
                  {t('cart.clearCart')}
                </button>
              </div>
            </div>

            <ul className="divide-y divide-gray-200">
              {items.map(item => (
                <li key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center">
                  <Link to={`/products/${item.id}`} className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md" 
                    />
                  </Link>
                  
                  <div className="flex-grow">
                    <Link to={`/products/${item.id}`} className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors">
                      {item.name}
                    </Link>
                    <div className="text-gray-500 mt-1">
                      ${item.price.toFixed(2)} × {item.quantity} = <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-4 sm:mt-0">
                    <div className="flex rounded-md mr-4">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="px-2 py-1 border border-gray-300 rounded-l-md bg-gray-50 text-gray-600 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                        className="w-12 px-2 py-1 border-t border-b border-gray-300 text-center"
                      />
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="px-2 py-1 border border-gray-300 rounded-r-md bg-gray-50 text-gray-600 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      aria-label={t('cart.removeItem')}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <Link to="/products" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              {t('cart.continueShopping')}
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-800">{t('cart.orderSummary')}</h2>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <form onSubmit={handleCouponSubmit}>
                  <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('cart.couponCode')}
                  </label>
                  <div className="flex">
                    <input
                      id="coupon"
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={t('cart.couponPlaceholder')}
                    />
                    <button
                      type="submit"
                      className="bg-gray-100 text-gray-700 px-4 py-2 border border-l-0 border-gray-300 rounded-r-md hover:bg-gray-200 transition-colors"
                    >
                      {t('cart.apply')}
                    </button>
                  </div>
                  {couponError && (
                    <p className="mt-1 text-sm text-red-500">{couponError}</p>
                  )}
                </form>
              </div>

              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>{t('cart.subtotal')}</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('cart.shipping')}</span>
                  <span>{t('cart.calculatedAtCheckout')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('cart.tax')}</span>
                  <span>{t('cart.calculatedAtCheckout')}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-semibold text-lg">
                  <span>{t('cart.total')}</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6">
                {isAuthenticated ? (
                  <Link
                    to="/checkout"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <CreditCard size={18} className="mr-2" />
                    {t('cart.proceedToCheckout')}
                  </Link>
                ) : (
                  <div className="space-y-3">
                    <Link
                      to="/login?redirect=checkout"
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors block text-center"
                    >
                      {t('cart.loginToCheckout')}
                    </Link>
                    <Link
                      to="/register?redirect=checkout"
                      className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-md font-medium hover:bg-gray-50 transition-colors block text-center"
                    >
                      {t('cart.createAccount')}
                    </Link>
                  </div>
                )}
              </div>

              <div className="mt-4 text-center text-sm text-gray-500">
                <p>{t('cart.secureCheckout')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;