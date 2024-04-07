import Image from 'next/image';
import React from 'react';
import { FiMapPin } from "react-icons/fi";
import { LuBadgeDollarSign } from "react-icons/lu";

const DetailsPage = ({data}) => {
    return (
        <div className='px-2  sm:px-4  md:px-8 lg:px-12 mt-12 mb-12'>
            <h1 className='font-bold  border-b-4 border-red-500 mb-5 w-fit text-3xl mt-12 '>Details</h1>
            <div className='flex items-center gap-x-10'>
                <div className=''>
                     <img className='h-52 w-52'  src={`/images/${data.id}.jpeg`} alt="" />
                </div>
                <div>
                    <p className='font-bold text-green-500'>{data.name}</p>
                    <div className='flex items-center gap-x-1 mt-4'>
                        <FiMapPin/>
                        {data.details[0].Cuisine}
                    </div>
                    <div className='flex items-center gap-x-1 font-bold mt-5'>
                        <LuBadgeDollarSign/>{data.price} $
                    </div>
                    
                    {data.discount ? <p className=' rounded-lg mt-3 text-center bg-red-500 text-white p-2 '>{data.discount}$ OFF</p>:''}

                    

                </div>
            </div>
            <p className='mt-10 text-justify'>{data.introduction}</p>
            <div className='mt-12'>
                <h1 className='font-bold text-lg text-red-500 mb-3'>Details</h1>
                <ul>
                    {data.details.map((item,index)=>(
                        <li className='flex' key={index}><p className='font-bold text-lg'>{Object.keys(item)[0]}</p>  : {Object.values(item)[0]}</li>
                    ))}
                </ul>
            </div>
            <div className='mt-12'>
                <h1 className='font-bold text-lg text-red-500 mb-3'>Ingredients</h1>
                <ul>
                    {data.ingredients.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className='mt-12'>
                <h1 className='font-bold text-lg text-red-500 mb-3'>Recipe</h1>
                <ul>
                    {data.recipe.map((item,index)=>(
                        <div className={'px-4 py-2 text-justify flex items-center gap-x-3' + (index % 2 ? ' bg-[#bcff93]': ' bg-[#e8ffdb]')} key={index}>
                            <p className='font-bold text-lg'>{index+1}</p><p>{item}</p>
                        </div>
                    ))}
                </ul>
            </div>
            <div className='w-2/3 mx-auto mt-10'><button className='bg-green-500 text-white p-2 rounded-lg w-full'>Add to Cart</button></div>
        </div>
    );
};

export default DetailsPage;