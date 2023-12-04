import { Link } from "react-router-dom";

export default function PaginaNaoEncontrada() {
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-purple-500 text-white">
                <div className="text-center">
                    <h1 className="text-6xl font-bold mb-4">
                        Aparentemente essa página não existe!
                    </h1>
                    <p className="text-3xl font-semibold">
                        Confira se você digitou algo errado. Quem sabe o endereço não mudou?
                    </p>
                    <p className='mt-10'>
                        <Link to='/' className='bg-white text-purple-500 rounded-md p-4 text-3xl font-semibold hover:bg-slate-100 transition'>
                            Voltar para o início
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}