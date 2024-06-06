import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  parentCategory?: SortOrder;
  updatedAt?: SortOrder;
};
