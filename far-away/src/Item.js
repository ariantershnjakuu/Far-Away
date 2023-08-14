export const initialItems = [{
    id: 1,
    description: 'Sunscreen',
    quantity: 1,
    packed: false,
}, {
    id: 2,
    description: 'Sunglasses',
    quantity: 2,
    packed: false,
}, {
    id: 3,
    description: 'Hat',
    quantity: 1,
    packed: true,
}, {
    id: 4,
    description: 'Shirts',
    quantity: 5,
    packed: true,
}];


function Item({ item }) {
    return (
        <li key={item.id} className='text-xl text-yellow-500'>
            <div className="flex gap-2">
                <span className={`font-semibold text-yellow-600`}>
                    {item.quantity}
                </span>
                <span className={`${item.packed === false ? "line-through" : ""}`} >
                    {item.description}
                </span>
                <button className="text-sm">{item.packed ? "✅" : "❌"}</button>
            </div>
        </li>
    )
}

export default Item;