import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsArray()
  @IsNotEmpty()
  items: { productId: string; quantity: number }[];
}
