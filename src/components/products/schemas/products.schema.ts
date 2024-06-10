import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Supplier } from 'src/components/suppliers/schemas/supplier.schema';
import { User } from 'src/components/users/schemas/user.schema';

@Schema()
export class Product extends Document {
  @Prop({required: true })
  name: string;

  @Prop({type: String, ref: 'Supplier', required: true})
  supplier: Supplier;
  
  @Prop({required: true })
  price: number;

  @Prop({ default: Date.now })
  createAt:Date;
 
}

export const ProductSchema = SchemaFactory.createForClass(Product);
