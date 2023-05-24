import { IsString, IsNumber, IsOptional, Min, Max, IsNotEmpty } from 'class-validator'

export class Author {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @Min(10)
    @Max(10)
    phone: number

    @IsString()
    @IsOptional()
    address: string
}