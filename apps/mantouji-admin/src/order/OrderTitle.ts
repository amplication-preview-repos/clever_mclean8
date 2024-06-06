import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "buyer";

export const OrderTitle = (record: TOrder): string => {
  return record.buyer?.toString() || String(record.id);
};
