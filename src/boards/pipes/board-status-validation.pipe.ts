import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board-status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = Object.values(BoardStatus);

  private isStatusValid(status: any): boolean {
    return this.StatusOptions.includes(status);
  }

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status option.`);
    }

    return value;
  }
}
