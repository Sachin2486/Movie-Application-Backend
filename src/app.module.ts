import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [
    MongooseModule.forRoot('your-mongodb-connection-string'),
    AuthModule,
    MoviesModule,
  ],
})
export class AppModule {}