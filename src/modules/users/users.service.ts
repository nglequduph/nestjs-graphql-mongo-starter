import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
    private readonly logger = new Logger(UsersService.name);

    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
    ) { }

    async findAll(): Promise<User[]> {
        try {
            return this.userModel
                .find()
                .exec();
        } catch (error) {
            this.logger.error(`Error finding users: ${error.message}`, error.stack);
            throw error;
        }
    }
} 