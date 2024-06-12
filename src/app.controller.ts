import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GeneratePasswordDto } from './create-password.do';

@Controller('password')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('generate')
  generatePassword(@Body() body: GeneratePasswordDto): string {
    return await this.appService.generatePassword(body);
  }
}
