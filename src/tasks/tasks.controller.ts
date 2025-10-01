import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from "@nestjs/swagger";

@ApiTags("tasks")
@Controller("tasks")
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    @ApiOperation({ summary: "Obtener todas las tareas" })
    @ApiResponse({ status: 200, description: "Lista de tareas obtenida correctamente." })
    findAll() {
        return this.tasksService.findAll();
    }

    @Post()
    @ApiOperation({ summary: "Crear una nueva tarea" })
    @ApiBody({ type: CreateTaskDto })
    @ApiResponse({ status: 201, description: "Tarea creada exitosamente." })
    create(@Body() dto: CreateTaskDto) {
        return this.tasksService.create(dto);
    }

    @Put(":id/complete")
    @ApiOperation({ summary: "Marcar tarea como completada" })
    @ApiParam({ name: "id", description: "ID de la tarea", type: String })
    @ApiResponse({ status: 200, description: "Tarea marcada como completada." })
    markCompleted(@Param("id") id: string) {
        return this.tasksService.markCompleted(id);
    }

    @Delete(":id")
    @ApiOperation({ summary: "Eliminar una tarea" })
    @ApiParam({ name: "id", description: "ID de la tarea", type: String })
    @ApiResponse({ status: 200, description: "Tarea eliminada exitosamente." })
    remove(@Param("id") id: string) {
        return this.tasksService.remove(id);
    }
}
