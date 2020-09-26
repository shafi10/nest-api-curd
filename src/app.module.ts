import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema  } from './schema/data.schema'
import config from './config/keys'

@Module({
  imports: [MongooseModule.forRoot(config.mongoUri),MongooseModule.forFeature([{name: 'Item',schema:ItemSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
