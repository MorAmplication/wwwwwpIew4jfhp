import { Field, ObjectType } from "@nestjs/graphql";
import { Mor } from "../mor/base/Mor";

@ObjectType()
export class MorInfo implements Partial<Mor> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  username!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
