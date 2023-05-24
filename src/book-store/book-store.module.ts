import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
// import { ConfigModule } from '@nestjs/config';
import { BookStoreController } from './book-store.controller';
import { BookStoreService } from './book-store.service';
import { ModelName, BooksSchema} from './Schemas/book-store.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ModelName, schema: BooksSchema }
    ])
  ],
  controllers: [BookStoreController],
  providers: [BookStoreService]
})
export class BookStoreModule {}
