import { AnnouncementUpdateManyWithoutCategoriesInput } from "./AnnouncementUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  announcements?: AnnouncementUpdateManyWithoutCategoriesInput;
  name?: string | null;
  parentCategory?: string | null;
};
