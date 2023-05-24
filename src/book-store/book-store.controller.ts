import { Controller, Get, Post, Body, Param , Query} from '@nestjs/common';
import { BookStoreService } from './book-store.service';
import { BookStoreDTO } from '../dto/book-store.dto'

@Controller('book-store')
export class BookStoreController {
    constructor(private readonly BookStoreService: BookStoreService) {}

    @Post()
    async createBook(
        @Body() book: BookStoreDTO,
    ): Promise<BookStoreDTO> {
        const result = await this.BookStoreService.createBooks(book)
        return result
    }

    @Get()
    async getBooks(
        @Query() { search }: any
    ): Promise<BookStoreDTO[]> {
        const result =  await this.BookStoreService.getBooks(search)

        return result
    }
}
