import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/components/users/schemas/user.schema';

@Schema()
export class Supplier extends Document {
  @Prop({required: true })
  name: string;

  @Prop({type: String, ref: 'User', required: true})
  user: User;
  
  @Prop({required: true })
  type: string;

  @Prop({ default: Date.now })
  createAt:Date;

  
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier);
