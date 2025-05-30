import { Resolver, Query } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) { }

    @Query(() => [User], { name: 'users' })
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
} 