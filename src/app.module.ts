import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookStoreModule } from './book-store/book-store.module';

@Module({

  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(`${process.env.MONGO_DB_HOST}://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@bookstorecluster0.rerojq1.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`),
    BookStoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
