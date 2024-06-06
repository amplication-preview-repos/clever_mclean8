import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Store } from "../store/Store";

export type Announcement = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  images: JsonValue;
  price: number | null;
  status?: "Option1" | null;
  store?: Store | null;
  title: string | null;
  updatedAt: Date;
};
