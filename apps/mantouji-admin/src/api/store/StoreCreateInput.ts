import { AnnouncementCreateNestedManyWithoutStoresInput } from "./AnnouncementCreateNestedManyWithoutStoresInput";
import { OrderCreateNestedManyWithoutStoresInput } from "./OrderCreateNestedManyWithoutStoresInput";

export type StoreCreateInput = {
  announcements?: AnnouncementCreateNestedManyWithoutStoresInput;
  description?: string | null;
  location?: string | null;
  orders?: OrderCreateNestedManyWithoutStoresInput;
  owner?: string | null;
  storeName?: string | null;
};
