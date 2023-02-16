import { CartItem } from "./CartItem";

export class Cart {
  public id: number;
  public userId: string;
  public total: number;
  public items: CartItem[];

  constructor(id: number, userId: string, total: number, items: CartItem[]) {
    this.id = id;
    this.userId = userId;
    this.total = total;
    this.items = items;
  }
}
