export class CartItem {
  public id: number;
  public productId: number;
  public name: string;
  public price: number;
  public quantity: number;

  constructor(id: number, productId: number, name: string, price: number, quantity: number) {
    this.id = id;
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
