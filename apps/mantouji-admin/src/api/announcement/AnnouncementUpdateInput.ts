import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type AnnouncementUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  images?: InputJsonValue;
  price?: number | null;
  status?: "Option1" | null;
  store?: StoreWhereUniqueInput | null;
  title?: string | null;
};
