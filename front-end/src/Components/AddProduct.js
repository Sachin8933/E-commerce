import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const[name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[category,setCategory]=useState('');
    const[company,setCompany]=useState('');
    const[error,setError]=useState('false');
    const navigate=useNavigate();
    const addProduct= async()=>{
        if(!name|| !price || !category ||!company){
            setError(true)
            return false;
        }
        console.log(name,price,category,company)
        const userId= JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:4000/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        console.log(result)
        navigate('/')
        
    }
  return (
    <div className='product'>
      <h1>Add product</h1>
      <input type='text' value={name} placeholder='Enter product name' className='inputBox'
      onChange={(e)=>{setName(e.target.value)}}/>
      {error && !name && <span className='invalid-input'>      Enter valid name </span>}
      <input type='text' value={price} placeholder='Enter product price' className='inputBox'
       onChange={(e)=>{setPrice(e.target.value)}}/>
       {error && !price && <span className='invalid-input'>    Enter valid price </span>}
      <input type='text' value={category}placeholder='Enter product category'className='inputBox'
       onChange={(e)=>{setCategory(e.target.value)}}/>
       {error && !category && <span className='invalid-input'> Enter valid category </span>}
      <input type='text' value={company}placeholder='Enter product company'className='inputBox'
       onChange={(e)=>{setCompany(e.target.value)}}/>
       {error && !company && <span className='invalid-input'>  Enter valid company name </span>}
      <button className="button"onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default AddProduct
