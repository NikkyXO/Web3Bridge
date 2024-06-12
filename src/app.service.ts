import { Injectable } from '@nestjs/common';
import { GeneratePasswordDto } from './create-password.do';

@Injectable()
export class AppService {
  private readonly lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  private readonly upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private readonly numberChars = '0123456789';
  private readonly specialChars = '!@#$%^&*()_+|;:,.?';

  async generatePassword(genPasswordData: GeneratePasswordDto) {
    let charSet = this.lowerCaseChars;

    switch (true) {
      case genPasswordData.useUpperCase:
        charSet += this.upperCaseChars;
      case genPasswordData.useNumbers:
        charSet += this.numberChars;
      case genPasswordData.useSpecialChars:
        charSet += this.specialChars;
        break;
    }

    let password = '';
    for (let i = 0; i < genPasswordData.length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }

    return { password };
  }
}
