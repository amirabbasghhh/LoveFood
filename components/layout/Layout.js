import Link from 'next/link';
import React from 'react';

const Layout = ({children}) => {
    return (
        <div className=' mx-2 sm:mx-10 md:mx-20 lg:mx-32'>
            <header className=' bg-red-400 flex items-center justify-between py-3 px-5 '>
                <div className='font-bold text-white'><Link href='/'>LOVE FOOD</Link></div>
                <div className='flex font-sans items-center gap-x-3'>
                    <Link className='text-white font-sans' href='/menu'> MENU</Link>
                    <Link className='text-white font-sans' href='/categories'>CATEGORIES</Link>
                </div>
            </header>
            <div className='min-h-[1000px]'>{children}</div>
            <footer className='bg-red-400 text-white mx-auto py-3 px-5 mb-5 text-center '>
                   <p className='text-center '><a className='text-black font-bold mr-8 ' href='https://lovefood.com' target='_blank'>LOVEFOOD</a>Nextjs Courses | Love Food project @</p>
            </footer>
        </div>
    );
};

export default Layout;