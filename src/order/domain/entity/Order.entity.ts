export type OrderEntity = {
  id: string;
  customerName: string;
  orderItems: OrderItemEntity[];
};

export type OrderItemEntity = {
  id: string;
  productName: string;
  quantity: number;
  price: number;
};
