
export class Product {
  public Description: string | undefined;
  public BuyValue: number | undefined;
  public SellValue: number | undefined;
  public Validity: Date | undefined;
  public Qtd: number | undefined;
  constructor(data?: Partial<Product>) {
    Object.assign(this, data);
  }

}
