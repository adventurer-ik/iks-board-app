import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { getConnection } from 'typeorm';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  async isConnected(): Promise<boolean> {
    const connection = getConnection();
    return connection.isConnected;
  }

  async getBoardById(id: number): Promise<Board> {
    console.log('service~~! id =', id);
    const found = await this.boardRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
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
