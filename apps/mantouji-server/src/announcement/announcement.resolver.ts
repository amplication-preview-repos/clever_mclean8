import * as graphql from "@nestjs/graphql";
import { AnnouncementResolverBase } from "./base/announcement.resolver.base";
import { Announcement } from "./base/Announcement";
import { AnnouncementService } from "./announcement.service";

@graphql.Resolver(() => Announcement)
export class AnnouncementResolver extends AnnouncementResolverBase {
  constructor(protected readonly service: AnnouncementService) {
    super(service);
  }
}
