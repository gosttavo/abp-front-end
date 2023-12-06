interface FormCadastroProps {
    titulo: string,
    btnTexto: string,
    function: any
    hasLogo: boolean
}

export default function FormCadastro(props: FormCadastroProps) {
    return (
        <>
            <form 
                method="POST"
                onSubmit={props.function}
                className="flex flex-col w-full max-w-lg mx-auto rounded-lg text-purple-500 bg-white p-6 shadow-lg"
            >
                {
                    props.hasLogo ? 
                        <div>
                            <img 
                            className="w-64 mb-6 mx-auto bg-purple-600 rounded-lg"
                            src="../../SnackRoute-logo-2.png" 
                            alt="Snack Route logo" />
                        </div>
                    : null
                }

                <div className="mb-6 flex flex-col items-center">
                    <span className="text-4xl font-bold mb-3">
                        {props.titulo}
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
                        {props.btnTexto}
                    </button>
                </div>
            </form>
        </>
    )
}
