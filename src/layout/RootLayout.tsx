import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";
import { Usuario } from "../interfaces/Usuario";
import { useEffect } from "react";

export default function RootLayout() {
    const auth: any = useAuth();
    const user: Usuario = auth?.usuario;

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    function doMakeMenuLogic(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedOption = event.target.value;

        switch(selectedOption) {
            case 'home':
                navigate('/');
                break;
            case 'perfil':
                navigate('/perfil');
                break;
            case 'sair':
                doLogoffUser();
                break;
            default:
                navigate('/');
                break;
        }
    }

    function doLogoffUser() {
        auth.logout();
        navigate('/login');
    }

    return (
        <>
            <header className="fixed top-0 z-50 bg-purple-500 w-full h-28 flex">
                <div className="flex justify-between items-center w-full">
                    <div className="ml-10 mr-5">
                    <Link className="flex items-center" to="/">
                        <img
                        className="h-20 sm:h-20"
                        src="../../SnackRoute-logo-2.png"
                        alt="Snack Route Logo"
                        />
                    </Link>
                    </div>
                    <nav className="flex justify-start mt-2 flex-wrap items-center text-white">
                    <NavLink
                        className="mr-4 block font-medium hover:text-red-400 transition"
                        to="/cidades"
                    >
                        Cidades
                    </NavLink>
                    <NavLink
                        className="mr-4 block font-medium hover:text-red-400 transition"
                        to="/restaurantes"
                    >
                        Restaurantes
                    </NavLink>
                    </nav>
                    <div className="mr-10 ml-auto mt-2 flex items-center">
                        <select 
                        onChange={e => doMakeMenuLogic(e)}
                        className="bg-purple-500 text-white font-semibold hover:text-red-400 transition hover:cursor-pointer" 
                        name="select" 
                        id="select"
                        >   
                            <option value="home">{user?.nome}</option>
                            <option value="perfil">Perfil</option>
                            <option value="sair">Sair</option>
                        </select>
                    </div>
                </div>
            </header>

            <main className="mx-7 mt-40 mb-20 flex-grow min-h-screen lg:mx-6">
                <div className="mx-auto max-w-7xl">
                    <Outlet />
                </div>
            </main>
            <footer className="bottom-0 w-full">
                <div className="text-center bg-purple-500 py-6">
                    <p className="text-white text-sm font-semibold">
                        &copy; 2023 Snack Router
                    </p>
                </div>
            </footer>
        </>
    )
}
