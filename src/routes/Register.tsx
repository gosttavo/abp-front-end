import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";

export default function Register() {
    const auth: any = useAuth();
    const navigate = useNavigate();

    function doRegisterNewUser(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const nome = formData.get('nome') as string;
        const sobrenome = formData.get('sobrenome') as string;
        const email = formData.get('email') as string;
        const senha = formData.get('senha') as string;

        if (!nome || !email || !senha || !sobrenome) {
            alert('Preencha todos os campos!');
            return;
        }

        auth.register(nome, sobrenome, email, senha);
        navigate('/login');
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-purple-500">
            <form 
                    method="POST"
                    onSubmit={doRegisterNewUser}
                    className="flex flex-col w-full max-w-lg mx-auto rounded-lg text-purple-500 bg-white p-6 shadow-lg"
                >
                  <div>
                        <img 
                        className="w-64 mb-6 mx-auto bg-purple-600 rounded-lg"
                        src="../../SnackRoute-logo-2.png" 
                        alt="Snack Route logo" />
                    </div>

                    <div className="mb-6 flex flex-col items-center">
                        <span className="text-4xl font-bold mb-3">
                            Criar conta
                        </span>
                    </div>

                    <div className="flex flex-col mb-4">
                        <input 
                            className="rounded-md p-2 border border-solid border-gray-200"
                            type="text" 
                            placeholder="Seu nome..." 
                            name="nome" />
                    </div>

                    <div className="flex flex-col mb-4">
                        <input 
                            className="rounded-md p-2 border border-solid border-gray-200"
                            type="text" 
                            placeholder="Seu sobrenome..." 
                            name="sobrenome" />
                    </div>

                    <div className="flex flex-col mb-4">
                        <input 
                            className="rounded-md p-2 border border-solid border-gray-200"
                            type="email" 
                            placeholder="Seu e-mail..." 
                            name="email" />
                    </div>

                    <div className="flex flex-col mb-4">
                        <input 
                            className="rounded-md p-2 border border-solid border-gray-200"
                            type="password" 
                            placeholder="Sua senha..." 
                            name="senha" />    
                    </div>

                    <div className="mt-6">
                        <button 
                            type="submit"
                            className='w-full text-white bg-purple-500 rounded-md p-2 font-bold hover:bg-purple-700 transition'>
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}