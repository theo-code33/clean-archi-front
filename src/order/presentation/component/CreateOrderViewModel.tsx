import { CreateOrderItemDto } from "../../domain/dto/create-order.dto";
import { createOrderService } from "../../domain/use-case/create-order.service";

export const createOrderViewModel = () => {
  const createOrderCommandHandler = async (
    event: React.FormEvent,
    orderItems: CreateOrderItemDto[]
  ) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      orderItems: { value: CreateOrderItemDto[] };
      customerName: { value: string };
    };

    const customerName = target.customerName.value;

    for (const orderItem of orderItems) {
      if (!orderItem.productName || !orderItem.quantity || !orderItem.price) {
        const index = orderItems.indexOf(orderItem);
        orderItems.splice(index, 1);
      }
    }

    await createOrderService({
      customerName,
      orderItems,
    });
  };

  return {
    createOrderCommandHandler,
  };
};
