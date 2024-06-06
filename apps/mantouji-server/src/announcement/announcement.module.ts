import { Module } from "@nestjs/common";
import { AnnouncementModuleBase } from "./base/announcement.module.base";
import { AnnouncementService } from "./announcement.service";
import { AnnouncementController } from "./announcement.controller";
import { AnnouncementResolver } from "./announcement.resolver";

@Module({
  imports: [AnnouncementModuleBase],
  controllers: [AnnouncementController],
  providers: [AnnouncementService, AnnouncementResolver],
  exports: [AnnouncementService],
})
export class AnnouncementModule {}
