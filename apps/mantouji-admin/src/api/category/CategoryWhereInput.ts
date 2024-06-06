import { AnnouncementListRelationFilter } from "../announcement/AnnouncementListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryWhereInput = {
  announcements?: AnnouncementListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  parentCategory?: StringNullableFilter;
};
