/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
