import React from 'react';
import Link from 'next/link';

const Guide = () => {
    return (
        <div className='px-2  sm:px-4  md:px-8 lg:px-12 mt-12 mb-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20'>
                <Link style={{boxShadow:' rgba(220, 38, 38, 0.25) 0px 5px 15px'}} className='flex items-center justify-center p-2' href='/menu'>Menu</Link>
                <Link style={{boxShadow:' rgba(220, 38, 38, 0.25) 0px 5px 15px'}} className='flex items-center justify-center p-2' href='/categories'>Categories</Link>
                <Link style={{boxShadow:' rgba(220, 38, 38, 0.25) 0px 5px 15px'}} className='flex items-center justify-center p-2' href='/'>Discount</Link>
            </div>
        </div>
    );
};

export default Guide;