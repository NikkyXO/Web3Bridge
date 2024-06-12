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

  it('should include special characters when useSpecialChars is true', async () => {
    const { password } = await appController.generatePassword({
      length: 10,
      useUpperCase: false,
      useNumbers: false,
      useSpecialChars: true,
    });
    expect(/[!@#$%^&*()_+|;:,.?]/.test(password)).toBeTruthy();
  });

  it('should generate a complex password with all character sets', async () => {
    const { password } = await appController.generatePassword({
      length: 20,
      useUpperCase: true,
      useNumbers: true,
      useSpecialChars: true,
    });
    expect(/[a-z]/.test(password)).toBeTruthy();
    expect(/[A-Z]/.test(password)).toBeTruthy();
    expect(/[0-9]/.test(password)).toBeTruthy();
    expect(/[!@#$%^&*()_+|;:,.?]/.test(password)).toBeTruthy();
  });
});
