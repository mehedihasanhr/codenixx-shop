import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'colors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000, () => {
    console.log(
      `Server running on port 5000`.green +
        ` http://localhost:5000/graphql`.red,
    );
  });
}
bootstrap();
