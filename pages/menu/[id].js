import DetailsPage from '@/components/templates/DetailsPage';
import { useRouter } from 'next/router';
import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Details = ({data}) => {
    console.log(data)
    const router=useRouter()
    if(router.isFallback){
        return(
            <div className='mt-32 text-center'>
            <PropagateLoader color="red" />
            </div>)
    }
    return (
        <div>
            <DetailsPage  data={data}/>
        </div>
    );
};

export default Details;

export async function getStaticPaths(){
    const res = await fetch('https://test-psi-dun-16.vercel.app/data')
    const data = await res.json()
    const newData=data.slice(0,10)
    const paths=newData?.map(item => ({params:{id:item.id.toString()},}))

    return{
        paths,
        fallback:true
    }
}

export async function getStaticProps(context){
    const res=await fetch(`${process.env.BASE_URL}/data/${context.params.id}`)
    const data=await res.json()
    if(!data.id){
        return{
            notFound:true
        }
    }
    return{
        props:{data}
    }
}