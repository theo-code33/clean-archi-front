import { useEffect, useState } from "react";
import { OrderEntity } from "../../domain/entity/Order.entity";
import { getOrderViewModel } from "./GetOrderViewModel";

const GetOrders = () => {
  const { getOrderCommandHandler } = getOrderViewModel();
  const [orders, setOrders] = useState<OrderEntity[]>([]);

  const handleGetOrders = async () => {
    const responseOrders = await getOrderCommandHandler();
    console.log(responseOrders);

    setOrders(responseOrders);
  };

  useEffect(() => {
    handleGetOrders();
  }, []);
  return (
    <main>
      <h1>Get Orders</h1>
      {orders.length === 0 ? (
        <p>There are no orders available at the moment</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Order Items</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.customerName}</td>
                <td>
                  <ul>
                    {order.orderItems.map((orderItem) => (
                      <li key={orderItem.id}>
                        {orderItem.productName} - {orderItem.quantity}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default GetOrders;
