import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // con esto estará disponible en toda la app sin necesidad de importar
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
