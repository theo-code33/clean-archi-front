import { useEffect, useState } from "react";
import { OrderEntity } from "../../domain/entity/Order.entity";
import { getOrdersService } from "../../domain/use-case/get-orders.service";

export const useGetOrderViewModel = () => {
  const [orders, setOrders] = useState<OrderEntity[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const orders = await getOrdersService();
        setOrders(orders);
      } catch (error) {
        throw new Error(error as string);
      }
    })();
  }, []);

  return {
    orders,
  };
};
