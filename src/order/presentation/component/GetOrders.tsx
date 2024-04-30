import { useGetOrderViewModel } from "./GetOrderViewModel";

const GetOrders = () => {
  const { orders } = useGetOrderViewModel();

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
