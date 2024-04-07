import React from 'react';
import Fast from '../icons/Fast';
import Food from '../icons/Food';
import Choice from '../icons/Choice';
import Clock from '../icons/Clock';

const Attributes = () => {
    return (
        <div className='px-2  sm:px-4  md:px-8 lg:px-12 mt-12'>
            <p className='mb-12 text-xl font-bold text-red-500 text-left'>why us?</p>
            <div className='grid gap-x-20 gap-y-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4'>
                <div style={{boxShadow:' rgba(220, 38, 38, 0.25) 0px 5px 15px'}} className='py-3  flex flex-col items-center justify-center gap-y-3'>
                    <Fast/>
                    <p className='font-bold'>Fast</p>
                </div>
                <div style={{boxShadow:' rgba(220, 38, 38, 0.25) 0px 5px 15px'}} className='py-3  flex flex-col items-center justify-center gap-y-3'>
                    <Food/>
                    <p className='font-bold'>Best Restuarant</p>
                </div>
                <div style={{boxShadow:' rgba(220, 38, 38, 0.25) 0px 5px 15px'}} className='py-3  flex flex-col items-center justify-center gap-y-3'>
                     <Choice/>
                     <p className='font-bold'>Your Choice</p>
                </div>
                <div style={{boxShadow:' rgba(220, 38, 38, 0.25) 0px 5px 15px'}} className='py-3  flex flex-col items-center justify-center gap-y-3'>
                     <Clock/>
                     <p className='font-bold'>24-7</p>
                </div>

            </div>
        </div>
    );
};

export default Attributes;