import { Injectable } from '@nestjs/common';
import  {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Item } from './interfaces/data.interfaces'

@Injectable()
export class AppService {
  constructor(@InjectModel('Item') private readonly itemModel:Model<Item>){}
  async findAll(): Promise<Item[]>{
    return await this.itemModel.find();
   }

   async findOne(id: string):Promise<Item> {
    return await this.itemModel.findOne({_id: id})
   }

async create(item:Item){
  const newItem = this.itemModel(item);
  return await newItem.save();
}

async delete(id:string):Promise<Item>{
  return await this.itemModel.findByIdAndRemove(id)
}

async update(id:string, item:Item):Promise<Item>{
 return await this.itemModel.findByIdAndUpdate(id, item, {new: true})
}
}
