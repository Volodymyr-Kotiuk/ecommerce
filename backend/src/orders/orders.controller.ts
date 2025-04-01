import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from '../products/dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Get(':userId')
  async getOrdersByUser(@Param('userId') userId: string) {
    return this.ordersService.getOrdersByUser(userId);
  }

  @Get()
  async getAllOrders() {
    return this.ordersService.getAllOrders();
  }
}
