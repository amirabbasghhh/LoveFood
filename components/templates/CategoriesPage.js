
import { useRouter } from "next/router";
import {  useState } from "react";
import Card from "../modules/Card";
import { useEffect } from "react";

const CategoriesPage = ({data}) => {
 const router=useRouter()   
 const[query,setQuery]=useState({difficulty:'',time:''})
 useEffect(()=>{
    const{difficulty,time}=router.query
    if(query.difficulty !== difficulty || query.time !== time){
        setQuery({difficulty,time})

    }
 },[])
 const changeHandler= (e)=>{
    setQuery({...query,[e.target.name]:e.target.value})
 }
 const searchHandler=()=>{
    router.push({pathname:'/categories',query})
 } 
    
  return (
    <div className="px-2  sm:px-4  md:px-8 lg:px-12 mt-12 mb-12">
      <h1 className="font-bold  border-b-4 border-red-500 mb-10 w-fit text-3xl mt-12 ">
        Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
        <div >
            <select name='difficulty' value={query.difficulty} onChange={changeHandler} style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} className=" text-[#48ac0a] font-semibold shadow-xl rounded-lg px-2 p-2 w-full">
                <option className="bg-gray-300" value="">Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
        </div>
        <div>
            <select name='time' value={query.time} onChange={changeHandler} style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} className="text-[#48ac0a] font-semibold shadow-xl rounded-lg px-2 p-2 w-full">
                <option value="">Cooking Time</option>
                <option value="More">More than 30 min</option>
                <option value="Less">Less than 30 min</option>
            </select>
        </div>
        <button onClick={searchHandler} className="text-white p-2 rounded-lg bg-[#53c60b]">Search</button>
      </div>
        {!data.length?<img className="mt-20 text-center mx-auto" src='/images/search.png' alt='serach'/>:null}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20">
        {data.map (food =>(
            <Card  {...food}   key={food.id}/>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
