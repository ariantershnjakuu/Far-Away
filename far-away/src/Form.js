import React from 'react'

function Form() {
    return (
        <div className='bg-orange-50 flex justify-center items-center p-4 text-xl text-orange-400 font-semibold'>
            <h1>What do you need for you trip?😍</h1>
            <select className='ml-3 py-1 px-2 rounded-full bg-orange-200 outline-none cursor-pointer'>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option key={num} className='rounded-full outline-none'>
                        {num}
                    </option>
                ))}
            </select>
            <input type='text' placeholder='Item...' className='ml-3 rounded-full bg-orange-200 px-3 py-1 font-medium text-base outline-none' />
            <button className='rounded-full py-1 px-3 bg-orange-200 hover:bg-yellow-600 font-medium transition-all duration-150 ml-3 text-base text-yellow-700 hover:text-white'>Add</button>
        </div>
    )
}


export default Form