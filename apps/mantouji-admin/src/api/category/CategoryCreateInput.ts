import { AnnouncementCreateNestedManyWithoutCategoriesInput } from "./AnnouncementCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  announcements?: AnnouncementCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
  parentCategory?: string | null;
};
