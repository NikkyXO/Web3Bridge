import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsPositive,
  Max,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Optional } from '@nestjs/common';

export class GeneratePasswordDto {
  @IsInt()
  @IsPositive()
  @Min(4)
  @Max(128)
  @Type(() => Number)
  @ApiProperty()
  length: number;

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  @ApiProperty()
  @Optional()
  useUpperCase: boolean = false;

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  @ApiProperty()
  @Optional()
  useNumbers: boolean = false;

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  @ApiProperty()
  @Optional()
  useSpecialChars: boolean = false;
}
