import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose'
import { BookStoreController } from './book-store.controller';
import { BookStoreService } from './book-store.service'
import { ModelName, BooksSchema } from './Schemas/book-store.schema'
import { rootMongooseTestModule, closeInMongodConnection } from '../common/MongooseTestModule'
import { MockBookData } from '../common/MockData'


describe('BookStoreController', () => {
  let controller: BookStoreController;
  let services: BookStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          { name: ModelName, schema: BooksSchema }
        ]),
      ],
      controllers: [BookStoreController],
      providers: [BookStoreService]
    }).compile();

    controller = module.get<BookStoreController>(BookStoreController);
    services = module.get<BookStoreService>(BookStoreService);

  });

  it('should create new book in store', async () => {
    const expectedData = MockBookData
    const newBook = {
      "title": "Learning React: Functional Web Development",
      "author": {
        "name": "Alex Banks, Eve Porcello",
        "phone": 123456789
      },
      "descriptions": "If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this small JavaScript library that can deftly display data changes on large-scale, data-driven websites without page reloads.",
      "genres": "Technical",
      "image": "learn-react.jpg",
      "languages": ["Enlglish"],
      "publishDate": "01/06/2017",
      "price": 1500,
      "rating": 3
    }

    jest
      .spyOn(services, 'createBooks')
      .mockResolvedValue(MockBookData)

    expect(await controller.createBook(newBook)).toEqual(expectedData)
  });

  it('should fetch books by search key', async () => {
    const expectedData = [MockBookData]
    jest
      .spyOn(services, 'getBooks')
      .mockResolvedValue([MockBookData])

    expect(await controller.getBooks({ search: 'learn' })).toEqual(expectedData)
  })

  afterAll(async () => {
    await closeInMongodConnection();
  });
});
