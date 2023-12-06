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

    function doUpdateUser(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const nome = formData.get('nome') as string;
        const sobrenome = formData.get('sobrenome') as string;
        const email = formData.get('email') as string;
        const senha = formData.get('senha') as string;

        auth.updateUser(auth?.usuario?.id, nome, sobrenome, email, senha);
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
                        function={doUpdateUser}
                        hasLogo={false}
                        ></FormCadastro> 
                    </div>
                    : null
                } 

            </div>
        </>
    )
}
