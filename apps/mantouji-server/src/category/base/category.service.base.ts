/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Category as PrismaCategory,
  Announcement as PrismaAnnouncement,
} from "@prisma/client";

export class CategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CategoryCountArgs, "select">): Promise<number> {
    return this.prisma.category.count(args);
  }

  async categories<T extends Prisma.CategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryFindManyArgs>
  ): Promise<PrismaCategory[]> {
    return this.prisma.category.findMany<Prisma.CategoryFindManyArgs>(args);
  }
  async category<T extends Prisma.CategoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryFindUniqueArgs>
  ): Promise<PrismaCategory | null> {
    return this.prisma.category.findUnique(args);
  }
  async createCategory<T extends Prisma.CategoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryCreateArgs>
  ): Promise<PrismaCategory> {
    return this.prisma.category.create<T>(args);
  }
  async updateCategory<T extends Prisma.CategoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryUpdateArgs>
  ): Promise<PrismaCategory> {
    return this.prisma.category.update<T>(args);
  }
  async deleteCategory<T extends Prisma.CategoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryDeleteArgs>
  ): Promise<PrismaCategory> {
    return this.prisma.category.delete(args);
  }

  async findAnnouncements(
    parentId: string,
    args: Prisma.AnnouncementFindManyArgs
  ): Promise<PrismaAnnouncement[]> {
    return this.prisma.category
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .announcements(args);
  }
}
