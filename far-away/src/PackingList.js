import React from 'react'
import { initialItems } from './Item'
import Item from './Item'


function PackingList() {
    return (
        <ul className='bg-zinc-50 h-screen flex justify-center items-start pt-8 gap-20'>
            {initialItems.map((item, id) => (
                <Item key={id} item={item} />
            ))}
        </ul>
    )
}


export default PackingList