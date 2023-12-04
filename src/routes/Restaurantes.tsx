import RestauranteCard from "../components/RestauranteCard";
import { RestaurantesList } from "../database/RestaurantesList"; "../database/RestaurantesList";

export default function Restaurantes() {
    const restaurantes = RestaurantesList;

    return (
        <>
            <div className='container'>
                <div className="grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8">
                    {
                        restaurantes.map((restaurante) => (
                            <RestauranteCard
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
        </>
    )
}