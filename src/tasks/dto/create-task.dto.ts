import { IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
  @ApiProperty({
    example: "Comprar leche",
    description: "Título de la tarea",
    minLength: 2,
  })
  @IsString()
  @MinLength(2)
  title: string;

  @ApiProperty({
    example: "Ir a la tienda y comprar leche descremada",
    description: "Descripción de la tarea",
  })
  @IsString()
  description: string;
}
