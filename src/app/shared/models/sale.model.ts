
export class Sale {
  public clientName: string | undefined;
  public saleProducts: Array<{
    productVariationId: string;
    quantity: number;
    unitPrice: number;
  }> | undefined;
  constructor(data?: Partial<Sale>) {
    Object.assign(this, data);
  }

}
