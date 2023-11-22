import { Link, NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <header
                className={`fixed top-0 z-50 bg-gray-100 text-purple-500 w-full h-28 flex items-center justify-center`}
            >
                <div className="flex max-w-5xl flex-wrap items-center justify-between">
                    <div className="sm:mr-8">
                        <Link className="flex items-center" to="/">
                            <span className="font-bold text-2xl">Snack Router</span>
                        </Link>
                    </div>
                </div>

                <nav>
                <NavLink to="/perfilRestaurante">
                    Perfil Restaurante
                </NavLink>
                </nav>
            </header>
            <main className="mx-7 mt-40 flex-grow lg:mx-6">
                <div className="mx-auto max-w-5xl">
                    <Outlet />
                </div>
            </main>
            <footer className="fixed bottom-0 w-full">
                <div className="text-center bg-gray-100 py-4">
                    <p className="text-purple-500 text-sm">
                        &copy; 2023 Snack Router
                    </p>
                </div>
            </footer>
        </>
    )
}
