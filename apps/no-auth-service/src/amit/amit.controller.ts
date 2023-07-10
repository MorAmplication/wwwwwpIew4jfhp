import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AmitService } from "./amit.service";
import { AmitControllerBase } from "./base/amit.controller.base";

@swagger.ApiTags("amits")
@common.Controller("amits")
export class AmitController extends AmitControllerBase {
  constructor(
    protected readonly service: AmitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
