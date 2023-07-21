import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const[name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[category,setCategory]=useState('');
    const[company,setCompany]=useState('');
    const params=useParams();
    const navigate=useNavigate();
     
    useEffect(()=>{
        
        getProductDetails();
    //eslint-disable-next-line
    },[])
    const getProductDetails = async()=>{
        console.log(params)
        let result=await fetch(`http://localhost:4000/product/${params.id}`,{
          headers:{
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
           } 
        }
        );
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    
    const updateProduct= async()=>{
           console.log(name,price,category,company)
           let result = await fetch(`http://localhost:4000/product/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':"application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }

           })
           result =await result.json()
           console.log(result)
           navigate('/')
            
        }
        
    
  return (
    <div className='product'>
      <h1>Update product</h1>
      <input type='text' value={name} placeholder='Enter product name' className='inputBox'
      onChange={(e)=>{setName(e.target.value)}}/>

      <input type='text' value={price} placeholder='Enter product price' className='inputBox'
       onChange={(e)=>{setPrice(e.target.value)}}/>
  
      <input type='text' value={category} placeholder='Enter product category'className='inputBox'
       onChange={(e)=>{setCategory(e.target.value)}}/>

      <input type='text' value={company}placeholder='Enter product company'className='inputBox'
       onChange={(e)=>{setCompany(e.target.value)}}/>

      <button className="button" onClick={updateProduct}> Update Product</button>
    </div>
  )
}

export default Update
