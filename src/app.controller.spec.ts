import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });

  it('should generate a password of specified length', async () => {
    const length = 10;
    const { password } = await appController.generatePassword({
      length,
      useUpperCase: false,
      useNumbers: false,
      useSpecialChars: false,
    });
    expect(password).toHaveLength(length);
  });

  it('should include uppercase letters when useUpperCase is true', async () => {
    const { password } = await appController.generatePassword({
      length: 10,
      useUpperCase: true,
      useNumbers: false,
      useSpecialChars: false,
    });
    expect(/[A-Z]/.test(password)).toBeTruthy();
  });
});
