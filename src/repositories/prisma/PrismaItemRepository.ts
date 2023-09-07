import { randomUUID } from 'crypto';
import { ItemRepository } from '../ItemRepository';
import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaItemRepository implements ItemRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, type: number): Promise<void> {
    await this.prisma.item.create({
      data: {
        id: randomUUID(),
        name,
        type,
      },
    });
  }
}
