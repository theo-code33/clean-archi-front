import { useState } from "react";
import { createOrderViewModel } from "./CreateOrderViewModel";
import { CreateOrderItemDto } from "../../domain/dto/create-order.dto";

const CreateOrder = () => {
  const { createOrderCommandHandler } = createOrderViewModel();

  const [orderItems, setOrderItems] = useState<CreateOrderItemDto[]>([]);

  const MAX_ORDER_ITEM_QUANTITY = 2;

  return (
    <main>
      <h1> Create order</h1>
      <form
        onSubmit={(e) => createOrderCommandHandler(e, orderItems)}
        style={{
          justifyContent: "flex-start",
        }}
      >
        <div>
          <label htmlFor="customerName">Name</label>
          <input type="text" id="customerName" name="customerName" />
        </div>
        <button
          type="button"
          onClick={() =>
            setOrderItems([
              ...orderItems,
              { productName: "", quantity: 0, price: 0 },
            ])
          }
        >
          Add Other Items
        </button>
        {orderItems.map((orderItem, index) => (
          <div key={index}>
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={orderItem.productName}
              onChange={(event) => {
                const newOrderItems = [...orderItems];
                newOrderItems[index].productName = event.target.value;
                setOrderItems(newOrderItems);
              }}
            />
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={orderItem.quantity}
              onChange={(event) => {
                const newOrderItems = [...orderItems];
                newOrderItems[index].quantity = Number(event.target.value);
                setOrderItems(newOrderItems);
              }}
              max={MAX_ORDER_ITEM_QUANTITY}
            />
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={orderItem.price}
              onChange={(event) => {
                const newOrderItems = [...orderItems];
                newOrderItems[index].price = Number(event.target.value);
                setOrderItems(newOrderItems);
              }}
            />
          </div>
        ))}
        <button type="submit">Create Order</button>
      </form>
    </main>
  );
};

export default CreateOrder;
