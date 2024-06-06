/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { StoreService } from "../store.service";
import { StoreCreateInput } from "./StoreCreateInput";
import { Store } from "./Store";
import { StoreFindManyArgs } from "./StoreFindManyArgs";
import { StoreWhereUniqueInput } from "./StoreWhereUniqueInput";
import { StoreUpdateInput } from "./StoreUpdateInput";
import { AnnouncementFindManyArgs } from "../../announcement/base/AnnouncementFindManyArgs";
import { Announcement } from "../../announcement/base/Announcement";
import { AnnouncementWhereUniqueInput } from "../../announcement/base/AnnouncementWhereUniqueInput";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";

export class StoreControllerBase {
  constructor(protected readonly service: StoreService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Store })
  async createStore(@common.Body() data: StoreCreateInput): Promise<Store> {
    return await this.service.createStore({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        location: true,
        owner: true,
        storeName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Store] })
  @ApiNestedQuery(StoreFindManyArgs)
  async stores(@common.Req() request: Request): Promise<Store[]> {
    const args = plainToClass(StoreFindManyArgs, request.query);
    return this.service.stores({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        location: true,
        owner: true,
        storeName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Store })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async store(
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Store | null> {
    const result = await this.service.store({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        location: true,
        owner: true,
        storeName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Store })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStore(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() data: StoreUpdateInput
  ): Promise<Store | null> {
    try {
      return await this.service.updateStore({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          location: true,
          owner: true,
          storeName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Store })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStore(
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Store | null> {
    try {
      return await this.service.deleteStore({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          location: true,
          owner: true,
          storeName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/announcements")
  @ApiNestedQuery(AnnouncementFindManyArgs)
  async findAnnouncements(
    @common.Req() request: Request,
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Announcement[]> {
    const query = plainToClass(AnnouncementFindManyArgs, request.query);
    const results = await this.service.findAnnouncements(params.id, {
      ...query,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        images: true,
        price: true,
        status: true,

        store: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/announcements")
  async connectAnnouncements(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: AnnouncementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      announcements: {
        connect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/announcements")
  async updateAnnouncements(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: AnnouncementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      announcements: {
        set: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/announcements")
  async disconnectAnnouncements(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: AnnouncementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      announcements: {
        disconnect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/orders")
  @ApiNestedQuery(OrderFindManyArgs)
  async findOrders(
    @common.Req() request: Request,
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Order[]> {
    const query = plainToClass(OrderFindManyArgs, request.query);
    const results = await this.service.findOrders(params.id, {
      ...query,
      select: {
        buyer: true,
        createdAt: true,
        id: true,
        paymentMethod: true,
        status: true,

        store: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/orders")
  async connectOrders(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        connect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orders")
  async updateOrders(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        set: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orders")
  async disconnectOrders(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        disconnect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }
}
