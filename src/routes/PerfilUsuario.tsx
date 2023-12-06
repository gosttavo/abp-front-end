import { useAuth } from "../context/auth/AuthContext";

export default function PerfilUsuario() {
    const auth: any = useAuth();

    return (
        <>
            <div className='bg-purple-500 text-white p-6 flex flex-col rounded-md'>
                <div className='flex justify-between'>
                    <p className='font-bold text-3xl'>
                        {auth?.usuario?.nome} {auth?.usuario?.sobrenome}
                    </p>
                    <button className='bg-white rounded-md text-purple-800 p-2 font-semibold hover:bg-slate-200 transition'>
                        Editar
                    </button>
                </div>

                <p className='font-semibold text-xl mt-1'>
                    {auth?.usuario?.email}
                </p>  
            </div>
        </>
    )
}
