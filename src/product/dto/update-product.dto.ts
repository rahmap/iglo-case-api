import { IsNotEmpty, IsNumber, MaxLength } from 'class-validator';
import { CreateProductDto } from './create-product.dto';
import { PartialType } from '@nestjs/mapped-types'

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsNotEmpty()
  @IsNumber()
  id: bigint;
}