import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module'; // Додати цей імпорт

@Module({
  imports: [PrismaModule, AuthModule], // Додати AuthModule
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
