import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { PubSub } from 'graphql-subscriptions';
import { join } from 'path';
import * as dotenv from 'dotenv';

import { UsersModule } from './modules/users/users.module';

const pubSub = new PubSub();
dotenv.config();

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      context: ({ req, connection }) => ({
        req,
        connection,
        pubSub,
      }),
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      playground: true,
      formatError: (error) => {
        return error
      }
    }),

    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule
  ],
})
export class AppModule { }
