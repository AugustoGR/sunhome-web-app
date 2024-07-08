export interface AddVariations {
  description: string,
  validUntil: Date,
  buyValuePerUnit: number,
  pricePerUnit: number,
  productId?: number
}

export interface AddProduct {
  description: string,
  price: number,
  variations: Array<AddVariations>
};