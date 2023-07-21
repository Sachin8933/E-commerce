import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    useEffect(()=>{
        const auth= localStorage.getItem('user')
        if(auth)
        {
            navigate('/')
        }
    })
    const handleLogin=async()=>{
        console.log(email,password)
        let result=await fetch('http://localhost:4000/login',{
               method:'post',
               body:JSON.stringify({email,password}),
               headers:{
                'Content-Type':'application/json'
               }
        })
        result=await result.json();
        console.log(result)
        if(result.auth){
               localStorage.setItem("user",JSON.stringify(result.user))
               localStorage.setItem("token",JSON.stringify(result.auth))
               navigate('/')
        }else{
            alert("Please Enter correct email/password")
        }
    }
  return (
    <div className='login'>
      <h1>Login</h1>
      <input type='email' value={email}className='inputBox' placeholder='Enter Email'
       onChange={(e)=>setEmail(e.target.value)}/>
      <input type='password' value={password} className='inputBox' placeholder='Enter Password'
       onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleLogin} type="button">Login</button>
    </div>
  )
}

export default Login
