import * as common from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AuthService } from "./auth.service";
import { GqlDefaultAuthGuard } from "./gqlDefaultAuth.guard";
import { UserData } from "./userData.decorator";
import { LoginArgs } from "./LoginArgs";
import { MorInfo } from "./MorInfo";

@Resolver(MorInfo)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => MorInfo)
  async login(@Args() args: LoginArgs): Promise<MorInfo> {
    return this.authService.login(args.credentials);
  }

  @Query(() => MorInfo)
  @common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
  async morInfo(@UserData() entityInfo: MorInfo): Promise<MorInfo> {
    return entityInfo;
  }
}
