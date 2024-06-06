/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumOrderPaymentMethod } from "./EnumOrderPaymentMethod";
import { EnumOrderStatus } from "./EnumOrderStatus";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class OrderCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  buyer?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumOrderPaymentMethod,
  })
  @IsEnum(EnumOrderPaymentMethod)
  @IsOptional()
  @Field(() => EnumOrderPaymentMethod, {
    nullable: true,
  })
  paymentMethod?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumOrderStatus,
  })
  @IsEnum(EnumOrderStatus)
  @IsOptional()
  @Field(() => EnumOrderStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => StoreWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StoreWhereUniqueInput)
  @IsOptional()
  @Field(() => StoreWhereUniqueInput, {
    nullable: true,
  })
  store?: StoreWhereUniqueInput | null;
}

export { OrderCreateInput as OrderCreateInput };
