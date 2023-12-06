import { useAuth } from "../context/auth/AuthContext";

export default function PerfilUsuario() {
    const auth: any = useAuth();

    return (
        <>
            <div className='bg-purple-500 text-white p-6 flex flex-col rounded-md'>
                <p className='font-bold text-3xl'>
                    {auth?.usuario?.nome} {auth?.usuario?.sobrenome}
                </p>
                <p className='font-semibold text-xl mt-1'>
                    {auth?.usuario?.email}
                </p>
                
            </div>
        </>
    )
}