export type CreateOrderItemDto = {
  productName: string;
  quantity: number;
  price: number;
};

export type CreateOrderDto = {
  customerName: string;
  orderItems: CreateOrderItemDto[];
};
