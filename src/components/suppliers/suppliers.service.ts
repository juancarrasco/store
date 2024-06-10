import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Supplier } from './schemas/supplier.schema';
import { Model } from 'mongoose';

@Injectable()
export class SuppliersService {

  constructor(
    @InjectModel(Supplier.name) private supplierModel:Model<Supplier>,
  ) {}


  create(createSupplierDto: CreateSupplierDto) {
    const createdSupplier = new this.supplierModel({
      name: createSupplierDto.name,
      user: createSupplierDto.user,
      type: createSupplierDto.type
    });
    return createdSupplier.save();
  }

  findAll() {
    return `This action returns all suppliers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supplier`;
  }

  update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return `This action updates a #${id} supplier`;
  }

  remove(id: number) {
    return `This action removes a #${id} supplier`;
  }
}
