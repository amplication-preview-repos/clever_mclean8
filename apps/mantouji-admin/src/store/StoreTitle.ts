import { Store as TStore } from "../api/store/Store";

export const STORE_TITLE_FIELD = "storeName";

export const StoreTitle = (record: TStore): string => {
  return record.storeName?.toString() || String(record.id);
};
