import { Repository } from 'typeorm';
import { Board } from './boards.entitity';

export class BoardRepository extends Repository<Board> {}
