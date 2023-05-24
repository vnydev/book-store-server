import { IsNumber, IsString, IsInt, Min, Max, IsObject, IsArray, IsNotEmpty } from 'class-validator'
import { Author } from './author.dto'

export class BookStoreDTO {

    @IsString()
    @IsNotEmpty()
    title: string

    @IsObject()
    author: Author

    @IsString()
    @IsNotEmpty()
    descriptions: string

    @IsString()
    @IsNotEmpty()
    genres: string

    @IsString()
    @IsNotEmpty()
    image: string

    @IsArray()
    @IsNotEmpty()
    languages: string[]

    @IsString()
    @IsNotEmpty()
    publishDate: Date

    @IsNumber()
    @IsNotEmpty()
    price: number

    @IsInt()
    @Min(0)
    @Max(5)
    @IsNotEmpty()
    rating: number

}