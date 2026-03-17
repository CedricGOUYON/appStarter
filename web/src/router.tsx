import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/homePage/HomePage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [{ index: true, element: <HomePage /> }],
	},
	{ path: "*", element: <NotFoundPage /> },
]);

export default router;
