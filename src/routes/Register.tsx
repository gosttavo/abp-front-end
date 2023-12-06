import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";
import FormCadastro from "../components/FormCadastro";

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
                <FormCadastro 
                hasLogo={true}
                function={doRegisterNewUser} 
                btnTexto='Cadastrar'
                titulo='Criar Conta'/>
            </div>
        </>
    )
}
