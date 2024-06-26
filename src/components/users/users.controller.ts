import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

//* http://localhost:3000/users/141341341AFAD3DAF - GET
@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Omit<User, 'password'>[]> {
    return await this.usersService.findAll();
  }
  
  //* http://localhost:3000/users/141341341AFAD3DAF - GET
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string):Promise<Omit<User, 'password'> | null> {
    return this.usersService.findOne(id);
  }

  //* http://localhost:3000/users/141341341AFAD3DAF - PATH

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto):Promise<Omit<User, 'password'> | null> {
    return this.usersService.update(id, updateUserDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
