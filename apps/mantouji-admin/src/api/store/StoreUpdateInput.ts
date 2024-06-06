import { AnnouncementUpdateManyWithoutStoresInput } from "./AnnouncementUpdateManyWithoutStoresInput";
import { OrderUpdateManyWithoutStoresInput } from "./OrderUpdateManyWithoutStoresInput";

export type StoreUpdateInput = {
  announcements?: AnnouncementUpdateManyWithoutStoresInput;
  description?: string | null;
  location?: string | null;
  orders?: OrderUpdateManyWithoutStoresInput;
  owner?: string | null;
  storeName?: string | null;
};
