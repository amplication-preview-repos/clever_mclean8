import { SortOrder } from "../../util/SortOrder";

export type StoreOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  owner?: SortOrder;
  storeName?: SortOrder;
  updatedAt?: SortOrder;
};
