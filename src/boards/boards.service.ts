import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }
  // getBoardById(id: string): Board {
  //   const result = this.boards.find((board) => board.id === id);
  //   if (!result) {
  //     throw new NotFoundException(`Can't find Board with id ${id}`);
  //   }
  //   return result;
  // }
  // deleteBoardById(id: string): void {
  //   const result = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== result.id);
  // }
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
