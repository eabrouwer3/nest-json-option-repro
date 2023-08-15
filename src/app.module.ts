import { Module } from '@nestjs/common';
import { JsonCommand } from './json.command';

@Module({
  imports: [],
  controllers: [],
  providers: [JsonCommand],
})
export class AppModule {}
