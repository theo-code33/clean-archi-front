import { createOrderService } from "../../domain/use-case/create-order.service";

export const createOrderViewModel = () => {
  const createOrderCommandHandler = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;

    await createOrderService({
      name: name,
    });
  };

  return {
    createOrderCommandHandler,
  };
};
