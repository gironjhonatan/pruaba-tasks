import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("tasks")
@Controller("tasks")
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    findAll() {
        return this.tasksService.findAll();
    }

    @Post()
    create(@Body() dto: CreateTaskDto) {
        return this.tasksService.create(dto);
    }

    @Put(":id/complete")
    markCompleted(@Param("id") id: string) {
        return this.tasksService.markCompleted(id);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.tasksService.remove(id);
    }
}