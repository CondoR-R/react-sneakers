import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Provider from "./pages/Provider/Provider";

import MainPage from "./pages/MainPage/MainPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Provider />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/favorite", element: <FavoritePage /> },
      { path: "/my-purchases", element: <OrdersPage /> },
      { path: "*", element: <MainPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
