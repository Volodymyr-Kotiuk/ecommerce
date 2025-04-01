import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module'; // Імпортуємо AuthModule

@Module({
  imports: [
    PrismaModule,
    AuthModule, // Додаємо AuthModule
    JwtModule, // Додаємо JwtModule (опціонально)
  ],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
