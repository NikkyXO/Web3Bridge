import { Controller, Get, Query } from '@nestjs/common';
import { PasswordService } from './password.service';
import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsPositive,
  Max,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class GeneratePasswordDto {
  @IsInt()
  @IsPositive()
  @Min(4)
  @Max(128)
  @Type(() => Number)
  length: number;

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  useUpperCase: boolean = false;

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  useNumbers: boolean = false;

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  useSpecialChars: boolean = false;
}