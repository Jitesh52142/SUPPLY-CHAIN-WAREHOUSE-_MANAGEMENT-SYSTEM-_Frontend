export interface InventoryItem {
  id: number;
  name: string;
  sku: string;
  description: string;
  unitPrice: number;
  quantity: number;
  warehouseId: number;
}