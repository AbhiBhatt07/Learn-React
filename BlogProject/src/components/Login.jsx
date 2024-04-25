/* eslint-disable */
import React, {useState} from 'react'
import {Button, Logo, Input} from './index'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authenticationSlice'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { authService } from '../appwrite/auth'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('')

    // now we create a login acync method 

    const login = async(data) =>{
        setError("")
        try {
           const session = await authService.login(data)
           if (session) {
          const userData = await authService.getCuurentUser()
          if (userData) dispatch(authLogin(userData))
          navigate("/") // aur ise root diractory per direct karde.
           }
        } catch (error) {
            setError(error.massage)
        }
    }

  return (
   <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(login)} >
            <div className='space-y-5'>
                <Input 
                label="Email:"
                type="email"
                placeholder="Enter Your Email"
                /* Yahan per hamne ...register isliye use kiya hain. because ager hame register kahi aur
                    bhi use karna pade to values overwrite na ho jaye.
                    aur yahan ham yai values ko spred(axtract) kar rahe hain. 
                */
                {...register("email",{
                    required: true,
                    validate:{
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                type="password"
                placeholder="Enter Your Password"
                label="Password:"
                {...register("password",{
                    required: true,
                })}
                />
                <button type='submit' className=' w-full'>
                    Sign in 
                </button>
            </div>
        </form>
        </div>
   </div>
  )
}

export default Login