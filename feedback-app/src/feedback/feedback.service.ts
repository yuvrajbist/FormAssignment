import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './create-feedback.dto';

interface Feedback {
  name: string;
  feedback: string;
}

@Injectable()
export class FeedbackService {
  private feedbacks: Feedback[] = [];

  findAll(): Feedback[] {
    return this.feedbacks;
  }

  create(feedback: CreateFeedbackDto) {
    this.feedbacks.push(feedback);
  }
}

