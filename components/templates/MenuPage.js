import React from 'react';
import Card from '../modules/Card';

const MenuPage = ({data}) => {
    return (
        <div className='px-2  sm:px-4  md:px-8 lg:px-12 mt-5'>
            <div>
                  <h1 className='font-bold text-3xl border-b-[3px] border-red-500 w-fit'>Menu</h1>
            </div>

            <div className='mt-8  mb-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                 {data.map (food =>(<div key={food.id}>
                     <Card {...food}/>
                 </div>
                 ))}
            </div>
        </div>
    );
};

export default MenuPage;