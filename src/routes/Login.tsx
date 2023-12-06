import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth/AuthContext';

export default function Login() {
    const auth: any = useAuth();
    const navigate = useNavigate();

    function doLoginUser(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        const senha = formData.get('senha') as string;

        console.log(email, senha)

        if (!email || !senha) {
            alert('Preencha todos os campos!');
            return;
        }

        auth.login(email, senha);
        navigate('/');
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-purple-500">
                <form 
                    method="POST"
                    onSubmit={doLoginUser}
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
                            Entrar
                        </span>
                        <span className="text-2xl font-semibold mb-3">
                            Descubra novas rotas gastronômicas!
                        </span>
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
                            Entrar
                        </button>
                        <div className='mt-3 flex justify-center'> 
                            <p>
                                Não possui conta? 
                                <Link className='ml-2 hover:text-purple-600 font-bold' to='/register'>Cadastre-se</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}