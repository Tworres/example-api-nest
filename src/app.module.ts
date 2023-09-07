import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { ItemRepository } from './repositories/itemRepository';
import { PrismaItemRepository } from './repositories/prisma/PrismaItemRepository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: ItemRepository,
      useClass: PrismaItemRepository,
    },
  ],
})
export class AppModule {}
