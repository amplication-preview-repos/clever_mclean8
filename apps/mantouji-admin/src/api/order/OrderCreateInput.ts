import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type OrderCreateInput = {
  buyer?: string | null;
  paymentMethod?: "Option1" | null;
  status?: "Option1" | null;
  store?: StoreWhereUniqueInput | null;
};
