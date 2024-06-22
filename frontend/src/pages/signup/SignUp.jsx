import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {
  const [inputs,setInputs] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })

  const {loading,signup} = useSignup()

  const handleCheckBoxChange = (gender) => {
    setInputs({...inputs,gender})
  }

  const handleChange = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'> 
    <div className='w-full p-6 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up
        <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form onSubmit={handleChange}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Full Name</span>
            </label>
            <input type="text" placeholder='John Doe' value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})} className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input type="text" placeholder='johndoe' value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})} className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input type="password" placeholder='Enter Password' value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})} className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm Password' value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})} className='w-full input input-bordered h-10' />
          </div>

    <GenderCheckbox onCheckBoxChange = {handleCheckBoxChange} selectedGender={inputs.gender} />

          <Link to={'/login'} className='text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account?
          </Link>
          <div>
            <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
          </div>
        </form>

    </div>
    </div>
  )
}

export default SignUp
