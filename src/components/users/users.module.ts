import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]) // Configura MongooseModule para incluir el Schema de usuario
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService] // Exportar el servicio para que pueda ser accesido por otros modulos
})
export class UsersModule {}
