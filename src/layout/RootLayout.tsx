import { Link, NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <header
                className={`fixed top-0 z-50 bg-purple-500 w-full h-28 flex items-center justify-center`}
            >
                <div className="flex max-w-5xl flex-wrap items-center justify-between">
                    <div className="sm:mr-4">
                        <Link className="flex items-center" to="/">
                            <img 
                            className="h-20" 
                            src="../../SnackRoute-logo-2.png" 
                            alt="Snack Route Logo" 
                            />
                        </Link>
                    </div>
                    <nav className="flex justify-between mt-2 text-white">
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
                </div>
            </header>
            <main className="mx-7 mt-40 flex-grow lg:mx-6">
                <div className="mx-auto max-w-7xl">
                    <Outlet />
                </div>
            </main>
            <footer className="fixed bottom-0 w-full">
                <div className="text-center bg-purple-500 py-6">
                    <p className="text-white text-sm font-semibold">
                        &copy; 2023 Snack Router
                    </p>
                </div>
            </footer>
        </>
    )
}
