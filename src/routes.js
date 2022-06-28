import Home from "./pages/home/home.jsx";
import Form from "./pages/form/form.jsx";
import ShowDetails from "./pages/showDetails";
import AllTransactions from "./pages/allTransactions";

const routes = [
  {
    exact: true,
    path: "/",
    element: <Home />,
  },
  {
    exact: true,
    path: "/form",
    element: <Form />,
  },
  {
    exact: true,
    path: "/allTransactions",
    element: <AllTransactions />,
  },
  {
    exact: true,
    path: "/details/:id",
    element: <ShowDetails />,
  },
];

export default routes;