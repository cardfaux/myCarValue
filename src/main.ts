import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieSession = require('cookie-session');

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.use(
//     cookieSession({
//       keys: ['ibhvloveggvjkbamandailkhuiandjhgoigwesleigh'],
//     }),
//   );
//   app.useGlobalPipes(
//     new ValidationPipe({
//       whitelist: true,
//     }),
//   );
//   await app.listen(3000);
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cookieSession({
      keys: ['asdfasfd'],
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  (app as any).set('etag', false);
  app.use((req, res, next) => {
    res.removeHeader('x-powered-by');
    res.removeHeader('date');
    next();
  });
  await app.listen(3000);
}
bootstrap();
