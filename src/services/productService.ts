// In a real application, this would make API calls to your Strapi backend
// For demo purposes, this is mocked

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  location: string;
  rating: number;
  reviews: number;
  inStock: number;
  seller: {
    id: string;
    name: string;
  };
}

interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

// Sample product data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 13 Pro - Excelente Estado',
    price: 550,
    description: 'iPhone 13 Pro en perfecto estado. 128GB de almacenamiento, color Grafito. Incluye cargador original y caja. Liberado para todas las compañías. Batería al 92% de salud.',
    images: [
      'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Electrónicos',
    location: 'Havana',
    rating: 4.5,
    reviews: 12,
    inStock: 1,
    seller: {
      id: '2',
      name: 'Carlos Rodriguez'
    }
  },
  {
    id: '2',
    name: 'Apartamento 2 Habitaciones en Vedado',
    price: 85000,
    description: 'Amplio apartamento de 2 habitaciones y 1 baño en El Vedado. Cocina remodelada, sala-comedor espaciosa. Balcón con vista a la calle. Ubicación ideal cerca de restaurantes y transporte público.',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Inmobiliaria',
    location: 'Havana',
    rating: 5,
    reviews: 3,
    inStock: 1,
    seller: {
      id: '3',
      name: 'María Fernández'
    }
  },
  {
    id: '3',
    name: 'Toyota Corolla 2018 - Único Dueño',
    price: 22000,
    description: 'Toyota Corolla 2018 en excelente estado. Motor 1.8L, transmisión automática. Aire acondicionado, dirección hidráulica, vidrios eléctricos. 45,000 km. Todos los mantenimientos al día con registros.',
    images: [
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Vehículos',
    location: 'Santiago de Cuba',
    rating: 4.8,
    reviews: 6,
    inStock: 1,
    seller: {
      id: '4',
      name: 'Roberto Gómez'
    }
  },
  {
    id: '4',
    name: 'MacBook Pro 2021 - M1 Pro',
    price: 1200,
    description: 'MacBook Pro 2021 con chip M1 Pro, 16GB RAM, 512GB SSD. Pantalla Liquid Retina XDR de 14 pulgadas. Teclado en español. Solo 6 meses de uso, en perfectas condiciones con caja original.',
    images: [
      'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Electrónicos',
    location: 'Havana',
    rating: 5,
    reviews: 8,
    inStock: 1,
    seller: {
      id: '5',
      name: 'Ana Martínez'
    }
  },
  {
    id: '5',
    name: 'Refrigerador Samsung Side by Side',
    price: 950,
    description: 'Refrigerador Samsung Side by Side en excelente estado. 26 pies cúbicos. Dispensador de agua y hielo. Panel digital. Acabado en acero inoxidable.',
    images: [
      'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Electrodomésticos',
    location: 'Camagüey',
    rating: 4.2,
    reviews: 5,
    inStock: 1,
    seller: {
      id: '6',
      name: 'Pedro Sánchez'
    }
  },
  {
    id: '6',
    name: 'Sofá Seccional Moderno',
    price: 600,
    description: 'Sofá seccional en forma de L, tapizado en tela gris de alta calidad. Incluye dos puff. Ideal para sala de estar. En perfecto estado, solo 1 año de uso.',
    images: [
      'https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Hogar',
    location: 'Holguín',
    rating: 4.7,
    reviews: 4,
    inStock: 1,
    seller: {
      id: '7',
      name: 'Laura Torres'
    }
  }
];

// Sample categories data
const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Electrónicos',
    slug: 'electronicos',
    count: 24
  },
  {
    id: '2',
    name: 'Inmobiliaria',
    slug: 'inmobiliaria',
    count: 56
  },
  {
    id: '3',
    name: 'Vehículos',
    slug: 'vehiculos',
    count: 37
  },
  {
    id: '4',
    name: 'Electrodomésticos',
    slug: 'electrodomesticos',
    count: 18
  },
  {
    id: '5',
    name: 'Hogar',
    slug: 'hogar',
    count: 42
  },
  {
    id: '6',
    name: 'Servicios',
    slug: 'servicios',
    count: 29
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Fetch featured products
export const fetchFeaturedProducts = async (): Promise<Product[]> => {
  await delay(800);
  return mockProducts;
};

// Fetch products with filtering
export const fetchProducts = async (
  page = 1,
  limit = 12,
  category?: string,
  location?: string,
  search?: string,
  minPrice?: number,
  maxPrice?: number,
  sort?: string
): Promise<{ products: Product[], total: number, pages: number }> => {
  await delay(800);
  
  let filtered = [...mockProducts];
  
  // Apply filters
  if (category) {
    filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
  
  if (location) {
    filtered = filtered.filter(p => p.location.toLowerCase() === location.toLowerCase());
  }
  
  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(searchLower) || 
      p.description.toLowerCase().includes(searchLower)
    );
  }
  
  if (minPrice !== undefined) {
    filtered = filtered.filter(p => p.price >= minPrice);
  }
  
  if (maxPrice !== undefined) {
    filtered = filtered.filter(p => p.price <= maxPrice);
  }
  
  // Apply sorting
  if (sort) {
    const [field, direction] = sort.split('_');
    filtered.sort((a, b) => {
      let comparison = 0;
      
      if (field === 'price') {
        comparison = a.price - b.price;
      } else if (field === 'rating') {
        comparison = a.rating - b.rating;
      } else {
        comparison = a.name.localeCompare(b.name);
      }
      
      return direction === 'desc' ? -comparison : comparison;
    });
  }
  
  // Calculate pagination
  const total = filtered.length;
  const pages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return {
    products: filtered.slice(startIndex, endIndex),
    total,
    pages
  };
};

// Fetch single product by ID
export const fetchProductById = async (id: string): Promise<Product | null> => {
  await delay(600);
  return mockProducts.find(p => p.id === id) || null;
};

// Fetch related products
export const fetchRelatedProducts = async (id: string, category: string): Promise<Product[]> => {
  await delay(800);
  return mockProducts
    .filter(p => p.id !== id && p.category === category)
    .slice(0, 4);
};

// Fetch category list
export const fetchCategoryList = async (): Promise<Category[]> => {
  await delay(500);
  return mockCategories;
};