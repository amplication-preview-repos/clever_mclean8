import { AnnouncementListRelationFilter } from "../announcement/AnnouncementListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type StoreWhereInput = {
  announcements?: AnnouncementListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  owner?: StringNullableFilter;
  storeName?: StringNullableFilter;
};
