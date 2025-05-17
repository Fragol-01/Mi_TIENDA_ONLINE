import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import { User, Settings, Package, CreditCard, LogOut } from 'lucide-react';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'payments', label: 'Payment Methods', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Profile Header */}
          <div className="bg-blue-600 px-6 py-8 text-white">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <User size={40} className="text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{user?.name}</h1>
                <p className="text-blue-100">{user?.email}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-blue-500 rounded-full text-sm">
                  {user?.role === 'seller' ? 'Seller Account' : 'Buyer Account'}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center px-6 py-4 text-sm font-medium ${
                    activeTab === id
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon size={18} className="mr-2" />
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Sections */}
          <div className="p-6">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        value={user?.name}
                        readOnly
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        value={user?.email}
                        readOnly
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Account Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-4 border-t border-gray-200">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                      </div>
                      <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Enable
                      </button>
                    </div>
                    <div className="flex items-center justify-between py-4 border-t border-gray-200">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                        <p className="text-sm text-gray-500">Receive updates about your account activity</p>
                      </div>
                      <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Manage
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <button
                    onClick={handleLogout}
                    className="flex items-center text-red-600 hover:text-red-700"
                  >
                    <LogOut size={18} className="mr-2" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="text-center py-12 text-gray-500">
                <Package size={48} className="mx-auto mb-4 text-gray-400" />
                <p>No orders yet</p>
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="text-center py-12 text-gray-500">
                <CreditCard size={48} className="mx-auto mb-4 text-gray-400" />
                <p>No payment methods added</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="text-center py-12 text-gray-500">
                <Settings size={48} className="mx-auto mb-4 text-gray-400" />
                <p>Settings coming soon</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;