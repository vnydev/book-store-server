import { Test, TestingModule } from '@nestjs/testing';
import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {
  let service: BookStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookStoreService],
    }).compile();

    service = module.get<BookStoreService>(BookStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
