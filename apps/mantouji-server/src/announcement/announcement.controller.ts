import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnnouncementService } from "./announcement.service";
import { AnnouncementControllerBase } from "./base/announcement.controller.base";

@swagger.ApiTags("announcements")
@common.Controller("announcements")
export class AnnouncementController extends AnnouncementControllerBase {
  constructor(protected readonly service: AnnouncementService) {
    super(service);
  }
}
