import Link from 'next/link';
import React from 'react';
import { FiMapPin } from "react-icons/fi";
import { LuBadgeDollarSign } from "react-icons/lu";

const Card = ({id,name,price,details,discount}) => {
    return (
        <div style={{boxShadow:' rgba(248, 113, 113, 0.35) 0px 5px 15px;'}} className=' relative rounded-md pb-2 border'>
            {discount >0 &&(
                <span className='absolute top-2 left-2 text-white bg-red-500 p-0.5 border-[3px] border-white rounded-lg'>{discount} %</span>

            )}
            <img src={`./images/${id}.jpeg`} alt="" />
            <div className='flex items-center justify-between px-2 mt-4 mb-2'>
                <p className='font-bold text-green-500'>{name}</p>
                <div className='flex items-center gap-x-1'><FiMapPin/>{details[0].Cuisine}</div>
            </div>
            <p className={'px-2 flex items-center gap-x-1'+(discount ?' text-red-500':' ')}>
               <LuBadgeDollarSign color='black'/>{price }$
            </p>
            <div className='mt-3 w-full flex items-center justify-center text-center px-3'>
                   <Link href={`/menu/${id}`} className='w-full p-2 text-white bg-green-400  rounded-lg'>See Details</Link>
            </div>
            
        </div>
    );
};

export default Card;