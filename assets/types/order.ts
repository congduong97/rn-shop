import { Product } from "./product";

export type OrderStatus = "Pending";
export type Order = {
  id: string;
  slug: string;
  item: string;
  details: string;
  status: OrderStatus;
  date: string;
  items: Array<Product>;
};
