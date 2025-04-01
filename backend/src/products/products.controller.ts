import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() body: { name: string; price: number }) {
    return this.productsService.createProduct(body.name, body.price);
  }

  @Get()
  async getProducts() {
    return this.productsService.getProducts();
  }
}