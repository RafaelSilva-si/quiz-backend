import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  findAll(id: number) {
    return `This action returns all quiz`;
  }
}
