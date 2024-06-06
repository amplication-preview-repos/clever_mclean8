import { Store } from "../store/Store";

export type Order = {
  buyer: string | null;
  createdAt: Date;
  id: string;
  paymentMethod?: "Option1" | null;
  status?: "Option1" | null;
  store?: Store | null;
  updatedAt: Date;
};
