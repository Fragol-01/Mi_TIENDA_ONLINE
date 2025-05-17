// In a real application, this would make API calls to your backend
// For demo purposes, this is mocked

interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Test User',
    email: 'user@example.com',
    role: 'buyer'
  },
  {
    id: '2',
    name: 'Test Seller',
    email: 'seller@example.com',
    role: 'seller'
  }
];

export const login = async (email: string, password: string): Promise<User> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const user = mockUsers.find(u => u.email === email);
  
  if (user && password === 'password') {
    return user;
  }
  
  throw new Error('Invalid credentials');
};

export const register = async (
  name: string, 
  email: string, 
  password: string, 
  role: 'buyer' | 'seller'
): Promise<User> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Check if user already exists
  if (mockUsers.some(u => u.email === email)) {
    throw new Error('User already exists');
  }
  
  // Create new user
  const newUser: User = {
    id: String(mockUsers.length + 1),
    name,
    email,
    role
  };
  
  mockUsers.push(newUser);
  
  return newUser;
};

export const logout = async (): Promise<void> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In a real app, you would invalidate the token on the server
  return;
};

export const getCurrentUser = async (): Promise<User | null> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In a real app, you would validate the token
  // For demo, check localStorage
  const savedUser = localStorage.getItem('user');
  return savedUser ? JSON.parse(savedUser) : null;
};