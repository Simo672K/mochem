import { createBrowserRouter } from "react-router-dom";
import Layout from "./screens/Layout";
import App from "./App";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
]);
export default Router;
