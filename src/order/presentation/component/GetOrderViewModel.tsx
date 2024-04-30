import { getOrdersService } from "../../domain/use-case/get-orders.service";

export const getOrderViewModel = () => {
  const getOrderCommandHandler = async () => {
    try {
      const orders = await getOrdersService();
      return orders;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  return {
    getOrderCommandHandler,
  };
};
