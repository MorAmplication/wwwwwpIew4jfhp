/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateAmitArgs } from "./CreateAmitArgs";
import { UpdateAmitArgs } from "./UpdateAmitArgs";
import { DeleteAmitArgs } from "./DeleteAmitArgs";
import { AmitCountArgs } from "./AmitCountArgs";
import { AmitFindManyArgs } from "./AmitFindManyArgs";
import { AmitFindUniqueArgs } from "./AmitFindUniqueArgs";
import { Amit } from "./Amit";
import { AmitService } from "../amit.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Amit)
export class AmitResolverBase {
  constructor(
    protected readonly service: AmitService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Amit",
    action: "read",
    possession: "any",
  })
  async _amitsMeta(
    @graphql.Args() args: AmitCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Amit])
  @nestAccessControl.UseRoles({
    resource: "Amit",
    action: "read",
    possession: "any",
  })
  async amits(@graphql.Args() args: AmitFindManyArgs): Promise<Amit[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Amit, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Amit",
    action: "read",
    possession: "own",
  })
  async amit(@graphql.Args() args: AmitFindUniqueArgs): Promise<Amit | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Amit)
  @nestAccessControl.UseRoles({
    resource: "Amit",
    action: "create",
    possession: "any",
  })
  async createAmit(@graphql.Args() args: CreateAmitArgs): Promise<Amit> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Amit)
  @nestAccessControl.UseRoles({
    resource: "Amit",
    action: "update",
    possession: "any",
  })
  async updateAmit(@graphql.Args() args: UpdateAmitArgs): Promise<Amit | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Amit)
  @nestAccessControl.UseRoles({
    resource: "Amit",
    action: "delete",
    possession: "any",
  })
  async deleteAmit(@graphql.Args() args: DeleteAmitArgs): Promise<Amit | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
