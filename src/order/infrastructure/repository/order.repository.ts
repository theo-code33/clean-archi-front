import { CreateOrderDto } from "../../domain/dto/create-order.dto";

export const OrderRepository = () => {
  const fetchCreateOrder = async (createOrderDto: CreateOrderDto) => {
    await fetch(`http://localhost:8000/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createOrderDto),
    });
  };

  const fetchGetOrders = async () => {
    const response = await fetch(`http://localhost:8000/api/orders`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to get orders");
        }
        return response.json();
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return response;
  };

  return {
    fetchCreateOrder,
    fetchGetOrders,
  };
};
