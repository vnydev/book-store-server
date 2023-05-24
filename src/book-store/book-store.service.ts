import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelName, Books } from './Schemas/book-store.schema'
import { BookStoreDTO } from '../dto/book-store.dto'

@Injectable()
export class BookStoreService {
    constructor(
        @InjectModel(ModelName) private BooksModel: Model<Books>
    ) {}

    async createBooks (book: BookStoreDTO ): Promise<BookStoreDTO> {
        const bookToCreate = {
            ...book,
            publishDate: new Date(book.publishDate)
        }
        const newbook = new this.BooksModel(bookToCreate)
        const result = await newbook.save()

        return result
    }

    async getBooks (search: string): Promise<BookStoreDTO[]> {
        const books = await this.BooksModel.find({ $or: [
                {title: {$regex: search, $options: 'i'}},
                {"author.name": {$regex: search, $options: 'i'}}
            ]
        }).exec()

        return books
    }
}
