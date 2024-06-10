import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/products.schema';

@Injectable()
export class ProductsService {

  constructor(
    @InjectModel(Product.name) private productModel:Model<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const createdProduct = new this.productModel({
      name: createProductDto.name,
      price: createProductDto.price,
      supplier: createProductDto.supplier
    });
    return createdProduct.save();
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
