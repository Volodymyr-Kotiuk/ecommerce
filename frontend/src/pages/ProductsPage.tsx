import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/productsApi';
import { Box, Card, CardContent, Typography } from '@mui/material';

const ProductsPage: React.FC = () => {
  const { data: products, error, isLoading } = useQuery(['products'], fetchProducts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
      {products.map((product: any) => (
        <Card key={product.id} sx={{ width: 300 }}>
          <CardContent>
            <Typography variant="h6">{product.name}</Typography>
            <Typography>{product.description}</Typography>
            <Typography>${product.price}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ProductsPage;
