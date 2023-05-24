import { Test, TestingModule } from '@nestjs/testing';
import { BookStoreService } from './book-store.service';
import { MongooseModule } from '@nestjs/mongoose'
import { MockBookData } from '../common/MockData'

import { ModelName, BooksSchema} from './Schemas/book-store.schema'
import { rootMongooseTestModule, closeInMongodConnection } from '../common/MongooseTestModule'

describe('BookStoreService', () => {
  let service: BookStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          { name: ModelName, schema: BooksSchema }
        ]),
      ],
      providers: [BookStoreService],
    }).compile();

    service = module.get<BookStoreService>(BookStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fetch books by search string', async () => {
    const expectedData = [MockBookData]
    jest
      .spyOn(service, 'getBooks')
      .mockResolvedValue([MockBookData])

    expect(await service.getBooks('learn')).toEqual(expectedData)
  })


  afterAll(async () => {
    await closeInMongodConnection();
  });
});
