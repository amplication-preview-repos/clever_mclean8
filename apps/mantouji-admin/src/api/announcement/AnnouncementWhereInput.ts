import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type AnnouncementWhereInput = {
  category?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: JsonFilter;
  price?: FloatNullableFilter;
  status?: "Option1";
  store?: StoreWhereUniqueInput;
  title?: StringNullableFilter;
};
