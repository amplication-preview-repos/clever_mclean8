import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  buyer?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentMethod?: SortOrder;
  status?: SortOrder;
  storeId?: SortOrder;
  updatedAt?: SortOrder;
};
