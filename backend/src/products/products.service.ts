import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async createProduct(name: string, price: number) {
    return this.prisma.product.create({
      data: { name, price },
    });
  }

  async getProducts() {
    return this.prisma.product.findMany();
  }
}