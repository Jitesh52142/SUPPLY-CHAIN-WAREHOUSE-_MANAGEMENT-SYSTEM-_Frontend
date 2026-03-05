export interface PurchaseOrder {
  id: number;
  vendorId: number;
  status: string;
  createdAt: Date;
  totalAmount: number;
}