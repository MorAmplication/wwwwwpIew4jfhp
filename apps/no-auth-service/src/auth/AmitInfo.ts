import { Field, ObjectType } from "@nestjs/graphql";
import { Amit } from "../amit/base/Amit";

@ObjectType()
export class AmitInfo implements Partial<Amit> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  username!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
