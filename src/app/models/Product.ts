export class Product {
  public id: number;
  public name: string;
  public price: number;
  public description: string;
  public quantity: number;
  public itemId : number;

  constructor(id: number, name: string, price: number, description: string, quantity : number, itemId : number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.quantity = quantity;
    this.itemId = itemId;
  }
}
