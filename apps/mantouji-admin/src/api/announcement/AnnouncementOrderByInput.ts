import { SortOrder } from "../../util/SortOrder";

export type AnnouncementOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
  storeId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
