import { IsNotEmpty, Length } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @Length(6, 250)
  name: string;

  @IsNotEmpty()
  type: number;
}
