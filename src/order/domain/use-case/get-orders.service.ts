import { OrderRepository } from "../../infrastructure/repository/order.repository";

export const getOrdersService = async () => {
  const { fetchGetOrders } = OrderRepository();

  const orders = await fetchGetOrders();

  return orders;
};
