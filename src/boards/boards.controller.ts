import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAllTase() {
    return this.boardService.getAllBoards();
  }

  @Post()
  createBoard(@Body('title') title: string, @Body('description') description: string) {
    console.log('title', title, typeof title);
    console.log('description', description, typeof description);
    return this.boardService.createBoard(title, description);
  }
}
