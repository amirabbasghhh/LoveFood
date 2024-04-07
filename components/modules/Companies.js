import React from 'react';
import Apple from '../icons/Apple';
import SpaceX from '../icons/SpaceX';
import Binance from '../icons/Binance';
import Tesla from '../icons/Tesla';

const Companies = () => {
    return (
        <div className='px-2  sm:px-4  md:px-8 lg:px-12 mt-12'>
            <div className='grid gap-x-10 gap-y-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4'>
                <div className='flex items-center justify-center'>
                     <Apple/>
                </div>
                <div className='flex items-center justify-center'>
                    <SpaceX/>
                </div>
                <div className='flex items-center justify-center'>
                    <Binance/>
                </div>
                <div  className='flex items-center justify-center'>
                    <Tesla/>
                </div>
            </div>
            
        </div>
    );
};

export default Companies;