import { IsNotEmpty, IsString } from "class-validator";

export class CreateSupplierDto {
    
  @IsString()
  @IsNotEmpty()
  readonly name:string;

  @IsString()
  @IsNotEmpty()
  readonly user: string;
  
  @IsString()
  @IsNotEmpty()
  type: string
}
