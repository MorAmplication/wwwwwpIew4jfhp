import * as common from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AuthService } from "./auth.service";
import { GqlDefaultAuthGuard } from "./gqlDefaultAuth.guard";
import { UserData } from "./userData.decorator";
import { LoginArgs } from "./LoginArgs";
import { AmitInfo } from "./AmitInfo";

@Resolver(AmitInfo)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => AmitInfo)
  async login(@Args() args: LoginArgs): Promise<AmitInfo> {
    return this.authService.login(args.credentials);
  }

  @Query(() => AmitInfo)
  @common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
  async amitInfo(@UserData() entityInfo: AmitInfo): Promise<AmitInfo> {
    return entityInfo;
  }
}
