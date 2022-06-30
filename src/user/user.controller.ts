import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
  import { User } from '../../entities/User';
  import { UserService } from './user.service';
  
  @Controller('user')
  export class UserController {
    constructor(private userService: UserService) {}
  
    @Get()
    findAll() {
      return this.userService.findAll();
    }
 
  }