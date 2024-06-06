import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type OrderUpdateInput = {
  buyer?: string | null;
  paymentMethod?: "Option1" | null;
  status?: "Option1" | null;
  store?: StoreWhereUniqueInput | null;
};
