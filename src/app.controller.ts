import { Body, Controller, Post } from '@nestjs/common';
import { CreateItemDto } from './dtos/itemDto';
import { ItemRepository } from './repositories/itemRepository';

@Controller()
export class AppController {
  constructor(private Items: ItemRepository) {}

  @Post()
  async store(@Body() request: CreateItemDto) {
    const { name, type } = request;
    this.Items.create(name, type);
  }
}
