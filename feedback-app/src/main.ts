import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {rateLimit} from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  var cors = require('cors')

  app.use(cors())
  
  app.use(
    rateLimit({
      windowMs: 10 * 1000, // 10 seconds
      max: 1, // Limit each IP to 1 request per windowMs
    }),
  );

  await app.listen(3000);
}
bootstrap();
