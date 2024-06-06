/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Announcement } from "./Announcement";
import { AnnouncementCountArgs } from "./AnnouncementCountArgs";
import { AnnouncementFindManyArgs } from "./AnnouncementFindManyArgs";
import { AnnouncementFindUniqueArgs } from "./AnnouncementFindUniqueArgs";
import { CreateAnnouncementArgs } from "./CreateAnnouncementArgs";
import { UpdateAnnouncementArgs } from "./UpdateAnnouncementArgs";
import { DeleteAnnouncementArgs } from "./DeleteAnnouncementArgs";
import { Category } from "../../category/base/Category";
import { Store } from "../../store/base/Store";
import { AnnouncementService } from "../announcement.service";
@graphql.Resolver(() => Announcement)
export class AnnouncementResolverBase {
  constructor(protected readonly service: AnnouncementService) {}

  async _announcementsMeta(
    @graphql.Args() args: AnnouncementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Announcement])
  async announcements(
    @graphql.Args() args: AnnouncementFindManyArgs
  ): Promise<Announcement[]> {
    return this.service.announcements(args);
  }

  @graphql.Query(() => Announcement, { nullable: true })
  async announcement(
    @graphql.Args() args: AnnouncementFindUniqueArgs
  ): Promise<Announcement | null> {
    const result = await this.service.announcement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Announcement)
  async createAnnouncement(
    @graphql.Args() args: CreateAnnouncementArgs
  ): Promise<Announcement> {
    return await this.service.createAnnouncement({
      ...args,
      data: {
        ...args.data,

        category: args.data.category
          ? {
              connect: args.data.category,
            }
          : undefined,

        store: args.data.store
          ? {
              connect: args.data.store,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Announcement)
  async updateAnnouncement(
    @graphql.Args() args: UpdateAnnouncementArgs
  ): Promise<Announcement | null> {
    try {
      return await this.service.updateAnnouncement({
        ...args,
        data: {
          ...args.data,

          category: args.data.category
            ? {
                connect: args.data.category,
              }
            : undefined,

          store: args.data.store
            ? {
                connect: args.data.store,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Announcement)
  async deleteAnnouncement(
    @graphql.Args() args: DeleteAnnouncementArgs
  ): Promise<Announcement | null> {
    try {
      return await this.service.deleteAnnouncement(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Category, {
    nullable: true,
    name: "category",
  })
  async getCategory(
    @graphql.Parent() parent: Announcement
  ): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Store, {
    nullable: true,
    name: "store",
  })
  async getStore(
    @graphql.Parent() parent: Announcement
  ): Promise<Store | null> {
    const result = await this.service.getStore(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
