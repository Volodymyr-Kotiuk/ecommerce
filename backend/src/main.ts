import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Включаємо CORS для дозволу запитів з порту 3001
  app.enableCors({
    origin: 'http://localhost:3001', // Дозволяємо запити лише з цього порту
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Налаштування Swagger документації
  const config = new DocumentBuilder()
    .setTitle('Інтернет-магазин API')
    .setDescription('Документація API для нашого магазину')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Запускаємо сервер на порту 3000
  await app.listen(3000);
}
bootstrap();
