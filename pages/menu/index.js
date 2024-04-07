import MenuPage from '@/components/templates/MenuPage';
import React from 'react';
import Swal from 'sweetalert2';

const Menu = ({data}) => {
    
    return (
        <div>
            <MenuPage data={data}/>
        </div>
    );
};

export default Menu;
export async function getStaticProps(){

        const res=await fetch(`${process.env.BASE_URL}/data`)
        const data=await res.json()
    return{
        props:{data},
        revalidate:10   //seconds
    }
}