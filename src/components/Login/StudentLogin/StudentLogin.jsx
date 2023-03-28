import React from 'react'
import {useForm} from 'react-hook-form'
import './StudentLogin.css'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookSquare , FaGithub} from 'react-icons/fa'
import {TiTick} from 'react-icons/ti'

export default function StudentLogin() {
  let {register,handleSubmit,formState:{errors}}=useForm()
  let submitForm=(userObj)=>{
    console.log(userObj)
  }
  return (
    <div className='container p-4 d-flex flex-wrap justify-content-center text-white' id="page">
      <div className='text-center p-3 rounded d-block' id="second">
            <h1 className='d-block  pt-5 p-5'>Student Login</h1>
            <h4 className='d-block p-3'>Login to get notified<br/> for upcomming events</h4>
            <TiTick size={100}/>
        </div>
        <div  className='text-center p-3 rounded d-block' id="first">
          <h2>Login</h2>
          <div className='pb-3'>
            <p>Login through</p>
            <a href='/' className='pe-1'><FcGoogle size={40}/></a>
            <a href='/' className='pe-1'><FaFacebookSquare size={40}/></a>
            <a href='/' className='pe-1'><FaGithub size={40}/></a>
          </div>
            <p>Or Login through Email</p>
          <div className='d-block '>
            <div className='p-3 mx-auto'>
          <input className='rounded p-1 w-75' type="email" placeholder='   Email'/></div>
          <div className='p-3 mx-auto'>
          <input className='rounded p-1 w-75 ' type="password" placeholder='  Password'/></div>
          <div className='pt-4'>
          <button className='btn btn-warning'>Login</button>
          </div>
          </div>
        </div>
        
            
    </div>

    
  )
}
