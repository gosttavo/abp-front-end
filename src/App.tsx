import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./routes/Home";
import RootLayout from "./layout/RootLayout";
import PerfilRestaurante from "./routes/PerfilRestaurante";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/perfilRestaurante',
          element: <PerfilRestaurante />
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
