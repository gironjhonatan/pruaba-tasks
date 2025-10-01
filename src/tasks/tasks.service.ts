import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.task.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(dto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: dto.title,
      },
    });
  }

  async markCompleted(id: string) {
    return this.prisma.task.update({
      where: { id },
      data: { isCompleted: true },
    });
  }

  async remove(id: string) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
