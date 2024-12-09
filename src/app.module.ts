import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { LanguagesController } from './languages.controller.js';

@Module({
  imports: [],
  controllers: [AppController, LanguagesController],
  providers: [AppService],
})
export class AppModule {}
