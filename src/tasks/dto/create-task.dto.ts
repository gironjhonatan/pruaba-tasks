import { IsString, MinLength } from "class-validator";

export class CreateTaskDto {
  @IsString()
  @MinLength(2)
  title: string;

  @IsString()
  description: string;
}
