import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateOrderPage from "./order/presentation/page/CreateOrderPage";
import GetOrdersPage from "./order/presentation/page/GetOrdersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create-order" element={<CreateOrderPage />} />
        <Route path="/get-orders" element={<GetOrdersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
