
export type Language = 'en' | 'fr' | 'ar';

export enum Category {
  PHONES = 'PHONES',
  DESKTOPS = 'DESKTOPS',
  LAPTOPS = 'LAPTOPS',
  TELEVISIONS = 'TELEVISIONS',
  COMPONENTS = 'COMPONENTS'
}

export enum ComponentType {
  CPU = 'CPU',
  GPU = 'GPU',
  RAM = 'RAM',
  MOTHERBOARD = 'MOTHERBOARD',
  STORAGE = 'STORAGE',
  PSU = 'PSU',
  COOLING = 'COOLING',
  CASE = 'CASE'
}

export enum ProductStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  SOLD = 'SOLD'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  componentType?: ComponentType;
  photos: string[];
  status: ProductStatus;
  isBestSeller?: boolean;
  sellerId: string;
  commission?: number;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: 'BUYER' | 'SELLER' | 'ADMIN';
  address: string;
  dob?: string;
  ccpAccount?: string;
  idCardFront?: string;
  idCardBack?: string;
}

export interface Transaction {
  id: string;
  productId: string;
  buyerId: string;
  sellerId: string;
  amount: number;
  commission: number;
  date: string;
  status: 'PAID' | 'TRANSFER_PENDING' | 'COMPLETED';
}
