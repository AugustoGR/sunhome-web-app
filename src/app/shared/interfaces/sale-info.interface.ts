export interface SaleInfo {
  id: string
  clientName: string
  SaleProductVariation: SaleProductVariation[]
}

export interface SaleProductVariation {
  id: string
  quantity: number
  unitPrice: string
  productVariationId: string
  saleId: string
  ProductVariation: ProductVariation
}

export interface ProductVariation {
  id: string
  description: string
  validUntil: string
  price: string
  buyValue: string
  productId: string
  Product: Product
}

export interface Product {
  id: string
  description: string
  price: string
  createdAt: string
  updatedAt: string
  userId: string
}