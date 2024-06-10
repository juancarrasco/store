import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './components/auth/auth.module';
import { UsersModule } from './components/users/users.module';
import { SuppliersModule } from './components/suppliers/suppliers.module';
import { ProductsModule } from './components/products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // hace que el modulo de configuración sea global, es accesible en cualquier módulo sin necesidad de importalo nuevamente
    }),
    MongooseModule.forRoot('mongodb://localhost/store'),
    AuthModule,
    UsersModule,
    SuppliersModule,
    ProductsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
