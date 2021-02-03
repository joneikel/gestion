import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3300;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT, () => {
    console.log(`Running PORT: ${PORT}`);
  });
}
bootstrap();
