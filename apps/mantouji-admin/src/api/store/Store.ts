import { Announcement } from "../announcement/Announcement";
import { Order } from "../order/Order";

export type Store = {
  announcements?: Array<Announcement>;
  createdAt: Date;
  description: string | null;
  id: string;
  location: string | null;
  orders?: Array<Order>;
  owner: string | null;
  storeName: string | null;
  updatedAt: Date;
};
