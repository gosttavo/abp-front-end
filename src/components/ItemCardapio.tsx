import { ItemsCardapio } from "../interfaces/ItemsCardapio";

export default function ItemCardapio(props: ItemsCardapio) {
    return (
        <>
            <div className='flex justify-between bg-gray-100 rounded-md p-6 w-70 shadow hover:shadow-lg transition'>
                <div className="flex flex-col">
                    <p className='text-2xl font-semibold'>
                        {props.nome}
                    </p>
                    <p className="text-sm text-gray-600 break-words overflow-auto mt-2">
                        {props.descricao}
                    </p>
                    <p className="mt-2">
                        A partir de <span className='font-semibold'>R$ {props.preco}</span>
                    </p>
                </div>
            </div>
        </>
    )
}