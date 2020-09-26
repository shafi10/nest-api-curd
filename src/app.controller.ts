import { Controller, Get, Post, Put, Delete, Param,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateItemDto } from './dto/create.dt'
import { Item } from './interfaces/data.interfaces'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
   async findAll():Promise<Item[]> {
       return this.appService.findAll()
   }

   @Get(":id")
 async findOne(@Param('id') id):Promise<Item>{
   return this.appService.findOne(id)
 }

   @Post()
   async create(@Body() CreateItemDto: CreateItemDto):Promise<Item> {
       return this.appService.create(CreateItemDto)
   }

   @Delete(':id')
    delete(@Param('id') id ):Promise<Item>{
        return this.appService.delete(id)
    }

    @Put(':id')
    update(@Body() updateItemDto:CreateItemDto, @Param('id') id ):Promise<Item>{
        return this.appService.update(id, updateItemDto)
    }
}
