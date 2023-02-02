import { Controller, Get, Param } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { Quiz } from './entities/quiz.entity';

@Controller('questions')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get(':quizId')
  async findOne(@Param('quizId') id: string) {
    let response = await this.quizService.findAll(+id);
    response = response.data.map((quiz: Quiz) => ({
      ...quiz,
      category: decodeURIComponent(quiz.category),
      question: decodeURIComponent(quiz.question),
      correct_answer: decodeURIComponent(quiz.correct_answer),
      incorrect_answers: quiz.incorrect_answers.map((ans) =>
        decodeURIComponent(ans),
      ),
    }));
    return response;
  }
}
