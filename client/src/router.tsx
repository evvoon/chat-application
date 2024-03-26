import { Outlet, createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./pages/layouts/AuthLayout";

import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import { RootLayout } from "./pages/layouts/RootLayout";
import { Home } from "./pages/Home";
import { NewChannel } from "./pages/channel/new";

export const router = createBrowserRouter(
  // takes in array of all the routes
  [
    {
      element: <ContextWrapper />,

      children: [
        {
          path: "/",
          element: <RootLayout />,
          children: [
            { index: true, element: <Home /> },
            {
              path: "/channel",
              children: [{ path: "new", element: <NewChannel /> }],
            },
          ],
        },
        {
          element: <AuthLayout />,
          children: [
            { path: "login", element: <Login /> },
            { path: "signup", element: <Signup /> },
          ],
        },
      ],
    },
  ]
);

function ContextWrapper() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
