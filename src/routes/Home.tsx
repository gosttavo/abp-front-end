import CidadesCard from "../components/CidadesCard";
import RestauranteCard from "../components/RestauranteCard";
import { useAuth } from "../context/auth/AuthContext";
import { RestaurantesList } from "../database/RestaurantesList";
import { Usuario } from "../interfaces/Usuario";

export default function Home() {    

    const restaurantes = RestaurantesList;
    const auth: any = useAuth();
    const user: Usuario = auth?.usuario;

    return (
        <>
            <div>
                <div className='text-4xl mb-10'>
                    Olá, <span className='font-semibold'>{user?.nome}!</span>
                </div>

                <hr></hr>

                <div className='mt-10 mb-10'>
                    <p className='text-2xl font-semibold mb-10'>
                        Suas últimas cidades visitadas!
                    </p>

                    <div className='container'>
                        <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">
                            <CidadesCard
                                size="w-30"
                                key={1}
                                id={1}
                                nome={'Criciúma'}
                            />
                            <CidadesCard
                                size="w-30"
                                key={2}
                                id={2}
                                nome={'Florianópolis'}
                            />
                            <CidadesCard
                                size="w-30"
                                key={3}
                                id={3}
                                nome={'Blumenau'}
                            />
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className='mt-10 mb-10'>
                    <p className='text-2xl font-semibold mb-10'>
                        Peça novamente!
                    </p>

                    <div className='container'>
                        <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">
                            {
                                restaurantes.map((restaurante) => (
                                    <RestauranteCard
                                        size="w-30"
                                        key={restaurante.id}
                                        id={restaurante.id}
                                        nome={restaurante.nome}
                                        horario={restaurante.horario}
                                        imagem={restaurante.imagem}
                                        nota={restaurante.nota}
                                        categoria={restaurante.categoria}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}