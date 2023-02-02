import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class QuizService {
  constructor(private readonly httpService: HttpService) {}
  async findAll(id: number): Promise<AxiosResponse<any>> {
    return this.httpService.axiosRef.get(
      'https://gist.githubusercontent.com/levismad/655fb5f6f6b11c4b603f1ae4e94e1632/raw/31473a7774bb0836dc3fc81aca9bfbd09b949d09/questions.json ',
    );
  }
}
