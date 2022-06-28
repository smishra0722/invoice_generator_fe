import Home from "./pages/home/home.jsx";
import Form from "./pages/form/form.jsx";
import ShowDetails from "./pages/showDetails";
import GenerateInvoice from "./pages/generateInvoice";
import AllTransactions from "./pages/allTransactions";

const routes = [
  {
    path: "/form/:id",
    element: <Form />,
  },
  {
    exact: true,
    path: "/",
    element: <Home />,
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
  {
    exact: true,
    path: "/generateInvoice/:id",
    element: <GenerateInvoice />,
  },
];

export default routes;
