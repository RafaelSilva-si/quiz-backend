import { Controller, Get, Param } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { Quiz } from './entities/quiz.entity';
import { shuffle } from 'src/Helpers/functions';

@Controller('questions')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    let response = await this.quizService.findAll(+id);
    response = response.data.map((quiz: Quiz) => ({
      ...quiz,
      category: decodeURIComponent(quiz.category),
      question: decodeURIComponent(quiz.question),
      correct_answer: decodeURIComponent(quiz.correct_answer),
      answers: shuffle(
        quiz.incorrect_answers
          .map((ans) => decodeURIComponent(ans))
          .concat(decodeURIComponent(quiz.correct_answer)),
      ),
    }));
    return response;
  }
}
