import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GeneratePasswordDto } from './create-password.do';

@Controller('password')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('generate')
  async generatePassword(
    @Body() body: GeneratePasswordDto,
  ): Promise<{ password: string }> {
    return await this.appService.generatePassword(body);
  }
}
