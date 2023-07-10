import { Module } from "@nestjs/common";
import { AmitModuleBase } from "./base/amit.module.base";
import { AmitService } from "./amit.service";
import { AmitController } from "./amit.controller";
import { AmitResolver } from "./amit.resolver";

@Module({
  imports: [AmitModuleBase],
  controllers: [AmitController],
  providers: [AmitService, AmitResolver],
  exports: [AmitService],
})
export class AmitModule {}
