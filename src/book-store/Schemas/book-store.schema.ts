import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BooksDocument = HydratedDocument<Books>;
export const ModelName = 'Books'

@Schema()
export class Author {
  @Prop({index: true})
  name: string;

  @Prop()
  phone: number;

  @Prop()
  address: string;
}

@Schema({ timestamps: true, collection: ModelName})
export class Books {
  @Prop({ index: true, required: true})
  title: string;

  @Prop()
  descriptions: string;

  @Prop()
  image: string;

  @Prop()
  genres: string;

  @Prop()
  languages: string[];

  @Prop({ required: true })
  author: Author;

  @Prop({default: 0, index: true})
  price: number;

  @Prop({default: 0, index: true})
  rating: number;

  @Prop({ type: Date, required: true })
  publishDate: Date;

}

export const BooksSchema = SchemaFactory.createForClass(Books);
