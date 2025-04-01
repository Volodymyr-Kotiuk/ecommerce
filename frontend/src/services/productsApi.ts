import axios from 'axios';

const API_URL = 'http://localhost:3000/products';

// Описуємо інтерфейс товару
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

// Функція для отримання товарів з бекенду
export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(API_URL);
  return response.data;
};
