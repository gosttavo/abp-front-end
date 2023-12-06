import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./routes/Home";
import RootLayout from "./layout/RootLayout";
import PerfilRestaurante from "./routes/PerfilRestaurante";
import Restaurantes from "./routes/Restaurantes";
import PaginaNaoEncontrada from "./routes/PaginaNaoEncontrada";
import Login from "./routes/Login";
import { AuthProvider } from "./context/auth/AuthContext";
import Register from "./routes/Register";
import PerfilUsuario from "./routes/PerfilUsuario";

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
          path: '/restaurantes',
          element: <Restaurantes />
        },
        {
          path: '/restaurantes/:id',
          element: <PerfilRestaurante />
        },
        {
          path: '/cidades',
          element: <PerfilRestaurante />
        },
        {
          path: '/perfil',
          element: <PerfilUsuario />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '*',
      element: <PaginaNaoEncontrada />
    }
  ]);

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
