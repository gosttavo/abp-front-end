export default function ItemCardapio() {
    return (
        <>
            <div className='flex justify-between bg-gray-100 rounded-md p-6 w-70'>
                <div className="flex flex-col">
                    <p className='text-2xl font-semibold'>
                        Big Mac
                    </p>
                    <p className="text-sm text-gray-600 break-words overflow-auto mt-2">
                        Dois hambúrgueres
                        Alface, queijo, molho especial,
                        Cebola, Picles
                        Num pão com gergelim
                        É o Big Mac (Big Mac).
                    </p>
                    <p className="mt-2">
                        A partir de <span className='font-semibold'>R$ 29,90</span>
                    </p>
                </div>
            </div>
        </>
    )
}