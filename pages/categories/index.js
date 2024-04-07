import CategoriesPage from '@/components/templates/CategoriesPage';
import React from 'react';

const Categories = ({data}) => {
    console.log(data)
    return (
        <div>
            <CategoriesPage data={data}/>
        </div>
    );
};

export default Categories;

export async function getServerSideProps(context){
     const{query:{difficulty,time}}=context
     const res=await fetch(`${process.env.BASE_URL}/data`)
     const data=await res.json()
     const filterData=data.filter((food )=>{
      if(time && difficulty){
        return(
            (food.details[2].Difficulty===difficulty) &&(time ==='More' ? +food.details[4]['Cooking Time'].split(" ")[0] > 30 : +food.details[4]['Cooking Time'].split(" ")[0] <= 30)
            )
        }
      else if(time && !difficulty){
        return(
     
                (time ==='More' ? +food.details[4]['Cooking Time'].split(" ")[0] > 30 : +food.details[4]['Cooking Time'].split(" ")[0] <= 30)
             )
        } 
     else if(!time && difficulty){
        return(
             (food.details[2].Difficulty===difficulty)
             )
        }   
    })
    return{
        props:{
            data:filterData
        }
    }
}