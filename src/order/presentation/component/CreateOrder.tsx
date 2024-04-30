import { createOrderViewModel } from "./CreateOrderViewModel";

const CreateOrder = () => {
  const { createOrderCommandHandler } = createOrderViewModel();

  return (
    <main>
      <h1> Create order</h1>
      <form onSubmit={createOrderCommandHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <input type="submit" value="Créer une commande" />
      </form>
    </main>
  );
};

export default CreateOrder;
