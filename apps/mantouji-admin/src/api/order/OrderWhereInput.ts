import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type OrderWhereInput = {
  buyer?: StringNullableFilter;
  id?: StringFilter;
  paymentMethod?: "Option1";
  status?: "Option1";
  store?: StoreWhereUniqueInput;
};
