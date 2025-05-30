import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class User extends Document {
    @Field(() => ID)
    _id: string;

    @Field(() => String)
    @Prop({ required: true })
    name: string;

    @Field(() => String)
    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Field(() => Date)
    @Prop()
    createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User); 