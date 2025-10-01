import { ApiProperty } from "@nestjs/swagger";

export class Task {
  @ApiProperty({ example: "abc123", description: "ID de la tarea" })
  id: string;

  @ApiProperty({ example: "Comprar leche", description: "Título de la tarea" })
  title: string;

  @ApiProperty({ example: false, description: "Estado de la tarea" })
  isCompleted: boolean;

  @ApiProperty({ example: "2025-10-01T12:00:00.000Z", description: "Fecha de creación" })
  createdAt: Date;
}
