import { Test, TestingModule } from '@nestjs/testing';
import { QuizService } from './quiz.service';
import { HttpModule } from '@nestjs/axios';
import { Quiz } from './entities/quiz.entity';

describe('QuizService', () => {
  let service: QuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [QuizService],
    }).compile();

    service = module.get<QuizService>(QuizService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be quiz object', async () => {
    const response = await service.findAll(1);
    expect(response).toHaveProperty('data');
  });
});
