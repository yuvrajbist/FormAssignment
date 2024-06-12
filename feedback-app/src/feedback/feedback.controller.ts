import { Controller, Get, Post, Body } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './create-feedback.dto';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get()
  findAll(): any {
    return this.feedbackService.findAll();
  }

  @Post()
  create(@Body() createFeedbackDto: CreateFeedbackDto) {
    this.feedbackService.create(createFeedbackDto);
  }
}



