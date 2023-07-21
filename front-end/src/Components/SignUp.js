import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const SignUp=()=>{
    

    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const navigate=useNavigate();

//The purpose of this useEffect function is to prevent users from 
//accessing the signup page if they are already logged in  
    useEffect(()=>{
        const auth= localStorage.getItem('user')
        if(auth)
        {
            navigate('/')
        }
    })
    
    
    const collectData=async()=>{
        console.log(name,email,password)
        let result=await fetch('http://localhost:4000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json',
                
            },
        });
        result =await result.json();
        console.log(result)
       localStorage.setItem('user',JSON.stringify(result.result))
       localStorage.setItem('token',JSON.stringify(result.auth))
       
       navigate('/')
        
    }
    return(
        
        <div className="signup">
         <h1>Register</h1>
         <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
         <input className="inputBox" type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}placeholder="Enter your Email"/>
         <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
         <button type="button"onClick={collectData}>Sign Up</button>
        </div>
    )
}
export default SignUp;
