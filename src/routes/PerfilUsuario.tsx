import FormCadastro from "../components/FormCadastro";
import { useAuth } from "../context/auth/AuthContext";
import { useState } from "react";

export default function PerfilUsuario() {
    const auth: any = useAuth();
    const [isUpdateUserFormOpen, setIsUpdateUserFormOpen] = useState(false);

    function doOpenUpdateUserForm(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();

        if (isUpdateUserFormOpen) setIsUpdateUserFormOpen(false);
        if (!isUpdateUserFormOpen) setIsUpdateUserFormOpen(true);
        
    }

    return (
        <>
            <div className='bg-purple-500 text-white p-6 flex flex-col rounded-md'>
                <div className='flex justify-between'>
                    <p className='font-bold text-3xl'>
                        {auth?.usuario?.nome} {auth?.usuario?.sobrenome}
                    </p>
                    <button 
                    onClick={doOpenUpdateUserForm}
                    className='bg-white rounded-md text-purple-800 p-2 font-semibold hover:bg-slate-200 transition'>
                        { isUpdateUserFormOpen ? <span>Voltar</span>: <span>Editar</span> }
                    </button>
                </div>

                <p className='font-semibold text-xl mt-1'>
                    {auth?.usuario?.email}
                </p> 

                {
                    isUpdateUserFormOpen ? 
                    <div className="mt-5">
                        <FormCadastro 
                        titulo='Editar Conta'
                        btnTexto='Editar'
                        function={auth.updateUser}
                        hasLogo={false}
                        ></FormCadastro> 
                    </div>
                    : null
                } 

            </div>
        </>
    )
}
