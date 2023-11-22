import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';
import ItemCardapio from '../components/ItemCardapio';
import { useState } from 'react';

export default function PerfilRestaurante() {

    const [cardapio, setCardapio] = useState([1,2,3,4,5,6]);

    return (
        <>
            <div className='flex justify-between'>
                <p className='flex'>
                    <span className='text-3xl font-semibold'>McDonald's Criciúma (CRI)</span>
                    <span className='ml-5 flex font-semibold mt-2'>
                        <Icon path={mdiStar} size={1} />
                        4.8
                    </span>
                </p>
            </div>

            <div className='mt-6 container'>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                {
                    cardapio.map((item, index) => {
                        return (
                            <ItemCardapio />
                        )
                    })
                }
                </div>             
            </div>
        </>
    )
}