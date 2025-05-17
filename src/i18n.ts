import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const enTranslations = {
  header: {
    products: 'Products',
    categories: 'Categories',
    sellers: 'Sellers',
    login: 'Login',
    toggleLanguage: 'Switch Language',
    menu: 'Menu',
    searchPlaceholder: 'Search products...'
  },
  mobileMenu: {
    menu: 'Menu',
    close: 'Close menu',
    home: 'Home',
    products: 'Products',
    categories: 'Categories',
    cart: 'Cart',
    profile: 'My Profile',
    sellerDashboard: 'Seller Dashboard',
    logout: 'Logout',
    login: 'Login',
    register: 'Register'
  },
  footer: {
    about: 'About CubaMarket',
    aboutText: 'CubaMarket is the leading marketplace for Cuban buyers and sellers, connecting communities and businesses across the country.',
    customerService: 'Customer Service',
    contact: 'Contact Us',
    faq: 'FAQ',
    shipping: 'Shipping',
    returns: 'Returns',
    information: 'Information',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    aboutUs: 'About Us',
    blog: 'Blog',
    newsletter: 'Newsletter',
    newsletterText: 'Subscribe to receive updates, access to exclusive deals, and more.',
    emailPlaceholder: 'Your email address',
    subscribe: 'Subscribe',
    rights: 'All rights reserved.'
  },
  home: {
    hero: {
      title: 'Buy & Sell in Cuba',
      subtitle: 'The most trusted marketplace for Cubans to buy, sell and trade goods safely and easily.',
      browseButton: 'Browse Products',
      sellButton: 'Start Selling'
    },
    categories: {
      title: 'Popular Categories',
      viewAll: 'View All',
      items: 'items'
    },
    featured: {
      title: 'Featured Products',
      viewAll: 'View All'
    },
    locations: {
      title: 'Shop by Location',
      viewAll: 'View All',
      listings: 'listings'
    },
    whyChoose: {
      title: 'Why Choose CubaMarket',
      subtitle: 'We provide the best experience for buyers and sellers in Cuba',
      reason1: {
        title: 'Trusted Marketplace',
        description: 'Our verification system ensures safe transactions between buyers and sellers.'
      },
      reason2: {
        title: 'Best Deals',
        description: 'Find competitive prices on thousands of products across all categories.'
      },
      reason3: {
        title: 'Local Focus',
        description: 'Shop by location to find products near you and reduce shipping costs.'
      }
    },
    cta: {
      title: 'Ready to start selling?',
      subtitle: 'Join thousands of successful sellers on our platform.',
      button: 'Open Your Shop'
    }
  },
  productGrid: {
    noProducts: 'No products found',
    tryDifferent: 'Try different search criteria or browse all categories'
  },
  product: {
    addToWishlist: 'Add to wishlist',
    removeFromWishlist: 'Remove from wishlist',
    addToCart: 'Add to cart'
  },
  productDetail: {
    reviews: 'reviews',
    listed: 'Listed',
    daysAgo: 'days ago',
    seller: 'Seller',
    inStock: 'in stock',
    addToCart: 'Add to Cart',
    addToWishlist: 'Add to Wishlist',
    removeFromWishlist: 'Remove from Wishlist',
    share: 'Share',
    relatedProducts: 'Related Products',
    notFound: {
      title: 'Product Not Found',
      message: 'The product you are looking for does not exist or has been removed.',
      browseButton: 'Browse Products'
    }
  },
  login: {
    title: 'Login to Your Account',
    email: 'Email Address',
    emailPlaceholder: 'Enter your email',
    password: 'Password',
    passwordPlaceholder: 'Enter your password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot Password?',
    login: 'Login',
    loggingIn: 'Logging in...',
    noAccount: 'Don\'t have an account?',
    signUp: 'Sign up',
    allFieldsRequired: 'All fields are required',
    authFailed: 'Authentication failed'
  },
  register: {
    title: 'Create an Account',
    name: 'Full Name',
    namePlaceholder: 'Enter your full name',
    email: 'Email Address',
    emailPlaceholder: 'Enter your email',
    password: 'Password',
    passwordPlaceholder: 'Create a password',
    confirmPassword: 'Confirm Password',
    confirmPasswordPlaceholder: 'Confirm your password',
    accountType: 'Account Type',
    buyer: 'Buyer',
    seller: 'Seller',
    createAccount: 'Create Account',
    creating: 'Creating account...',
    alreadyHaveAccount: 'Already have an account?',
    login: 'Login',
    allFieldsRequired: 'All fields are required',
    passwordsDoNotMatch: 'Passwords do not match',
    passwordTooShort: 'Password must be at least 8 characters',
    registrationFailed: 'Registration failed'
  },
  cart: {
    title: 'Shopping Cart',
    items: '{{count}} items',
    clearCart: 'Clear Cart',
    removeItem: 'Remove item',
    continueShopping: 'Continue Shopping',
    orderSummary: 'Order Summary',
    couponCode: 'Coupon Code',
    couponPlaceholder: 'Enter coupon code',
    apply: 'Apply',
    invalidCoupon: 'Invalid or expired coupon code',
    subtotal: 'Subtotal',
    shipping: 'Shipping',
    tax: 'Tax',
    calculatedAtCheckout: 'Calculated at checkout',
    total: 'Total',
    proceedToCheckout: 'Proceed to Checkout',
    loginToCheckout: 'Login to Checkout',
    createAccount: 'Create an Account',
    secureCheckout: 'Secure checkout powered by Stripe',
    empty: {
      title: 'Your Cart is Empty',
      message: 'Looks like you haven\'t added any products to your cart yet.',
      browseButton: 'Start Shopping'
    }
  },
  common: {
    home: 'Home',
    products: 'Products'
  }
};

// Spanish translations
const esTranslations = {
  header: {
    products: 'Productos',
    categories: 'Categorías',
    sellers: 'Vendedores',
    login: 'Iniciar Sesión',
    toggleLanguage: 'Cambiar Idioma',
    menu: 'Menú',
    searchPlaceholder: 'Buscar productos...'
  },
  mobileMenu: {
    menu: 'Menú',
    close: 'Cerrar menú',
    home: 'Inicio',
    products: 'Productos',
    categories: 'Categorías',
    cart: 'Carrito',
    profile: 'Mi Perfil',
    sellerDashboard: 'Panel de Vendedor',
    logout: 'Cerrar Sesión',
    login: 'Iniciar Sesión',
    register: 'Registrarse'
  },
  footer: {
    about: 'Sobre CubaMarket',
    aboutText: 'CubaMarket es el mercado líder para compradores y vendedores cubanos, conectando comunidades y negocios en todo el país.',
    customerService: 'Atención al Cliente',
    contact: 'Contáctenos',
    faq: 'Preguntas Frecuentes',
    shipping: 'Envíos',
    returns: 'Devoluciones',
    information: 'Información',
    privacy: 'Política de Privacidad',
    terms: 'Términos y Condiciones',
    aboutUs: 'Sobre Nosotros',
    blog: 'Blog',
    newsletter: 'Boletín',
    newsletterText: 'Suscríbete para recibir actualizaciones, acceso a ofertas exclusivas y más.',
    emailPlaceholder: 'Tu dirección de correo',
    subscribe: 'Suscribirse',
    rights: 'Todos los derechos reservados.'
  },
  home: {
    hero: {
      title: 'Compra y Vende en Cuba',
      subtitle: 'El mercado más confiable para que los cubanos compren, vendan e intercambien productos de forma segura y fácil.',
      browseButton: 'Explorar Productos',
      sellButton: 'Empezar a Vender'
    },
    categories: {
      title: 'Categorías Populares',
      viewAll: 'Ver Todas',
      items: 'artículos'
    },
    featured: {
      title: 'Productos Destacados',
      viewAll: 'Ver Todos'
    },
    locations: {
      title: 'Comprar por Ubicación',
      viewAll: 'Ver Todas',
      listings: 'anuncios'
    },
    whyChoose: {
      title: '¿Por Qué Elegir CubaMarket?',
      subtitle: 'Ofrecemos la mejor experiencia para compradores y vendedores en Cuba',
      reason1: {
        title: 'Mercado Confiable',
        description: 'Nuestro sistema de verificación garantiza transacciones seguras entre compradores y vendedores.'
      },
      reason2: {
        title: 'Mejores Ofertas',
        description: 'Encuentra precios competitivos en miles de productos en todas las categorías.'
      },
      reason3: {
        title: 'Enfoque Local',
        description: 'Compra por ubicación para encontrar productos cerca de ti y reducir costos de envío.'
      }
    },
    cta: {
      title: '¿Listo para empezar a vender?',
      subtitle: 'Únete a miles de vendedores exitosos en nuestra plataforma.',
      button: 'Abre Tu Tienda'
    }
  },
  productGrid: {
    noProducts: 'No se encontraron productos',
    tryDifferent: 'Intenta con diferentes criterios de búsqueda o explora todas las categorías'
  },
  product: {
    addToWishlist: 'Añadir a favoritos',
    removeFromWishlist: 'Quitar de favoritos',
    addToCart: 'Añadir al carrito'
  },
  productDetail: {
    reviews: 'reseñas',
    listed: 'Publicado',
    daysAgo: 'días atrás',
    seller: 'Vendedor',
    inStock: 'en stock',
    addToCart: 'Añadir al Carrito',
    addToWishlist: 'Añadir a Favoritos',
    removeFromWishlist: 'Quitar de Favoritos',
    share: 'Compartir',
    relatedProducts: 'Productos Relacionados',
    notFound: {
      title: 'Producto No Encontrado',
      message: 'El producto que buscas no existe o ha sido eliminado.',
      browseButton: 'Explorar Productos'
    }
  },
  login: {
    title: 'Iniciar Sesión',
    email: 'Correo Electrónico',
    emailPlaceholder: 'Ingresa tu correo',
    password: 'Contraseña',
    passwordPlaceholder: 'Ingresa tu contraseña',
    rememberMe: 'Recordarme',
    forgotPassword: '¿Olvidaste tu Contraseña?',
    login: 'Iniciar Sesión',
    loggingIn: 'Iniciando sesión...',
    noAccount: '¿No tienes una cuenta?',
    signUp: 'Regístrate',
    allFieldsRequired: 'Todos los campos son obligatorios',
    authFailed: 'Autenticación fallida'
  },
  register: {
    title: 'Crear una Cuenta',
    name: 'Nombre Completo',
    namePlaceholder: 'Ingresa tu nombre completo',
    email: 'Correo Electrónico',
    emailPlaceholder: 'Ingresa tu correo',
    password: 'Contraseña',
    passwordPlaceholder: 'Crea una contraseña',
    confirmPassword: 'Confirmar Contraseña',
    confirmPasswordPlaceholder: 'Confirma tu contraseña',
    accountType: 'Tipo de Cuenta',
    buyer: 'Comprador',
    seller: 'Vendedor',
    createAccount: 'Crear Cuenta',
    creating: 'Creando cuenta...',
    alreadyHaveAccount: '¿Ya tienes una cuenta?',
    login: 'Inicia Sesión',
    allFieldsRequired: 'Todos los campos son obligatorios',
    passwordsDoNotMatch: 'Las contraseñas no coinciden',
    passwordTooShort: 'La contraseña debe tener al menos 8 caracteres',
    registrationFailed: 'Registro fallido'
  },
  cart: {
    title: 'Carrito de Compras',
    items: '{{count}} artículos',
    clearCart: 'Vaciar Carrito',
    removeItem: 'Eliminar artículo',
    continueShopping: 'Continuar Comprando',
    orderSummary: 'Resumen del Pedido',
    couponCode: 'Código de Cupón',
    couponPlaceholder: 'Ingresa código de cupón',
    apply: 'Aplicar',
    invalidCoupon: 'Código de cupón inválido o expirado',
    subtotal: 'Subtotal',
    shipping: 'Envío',
    tax: 'Impuestos',
    calculatedAtCheckout: 'Calculado al finalizar',
    total: 'Total',
    proceedToCheckout: 'Proceder al Pago',
    loginToCheckout: 'Iniciar Sesión para Comprar',
    createAccount: 'Crear una Cuenta',
    secureCheckout: 'Pago seguro con Stripe',
    empty: {
      title: 'Tu Carrito está Vacío',
      message: 'Parece que aún no has agregado productos a tu carrito.',
      browseButton: 'Comenzar a Comprar'
    }
  },
  common: {
    home: 'Inicio',
    products: 'Productos'
  }
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    es: { translation: esTranslations }
  },
  lng: 'es', // Default language is Spanish
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false // React already escapes values
  }
});

export default i18n;