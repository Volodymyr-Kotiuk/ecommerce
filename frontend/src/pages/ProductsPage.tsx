import { useQuery } from '@tanstack/react-query';
import { fetchProducts, Product } from '../api/productsApi';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';

const ProductsPage = () => {
  // Використовуємо React Query для отримання товарів
  const { data: products, error, isLoading } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error.message}</p>;

  return (
    <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} padding={2}>
      {products?.map((product) => (
        <Card key={product.id} variant="outlined">
          <CardContent>
            <Typography variant="h6">{product.name}</Typography>
            <Typography color="text.secondary">{product.description}</Typography>
            <Typography variant="h5">{product.price} грн</Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Додати в кошик
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ProductsPage;
