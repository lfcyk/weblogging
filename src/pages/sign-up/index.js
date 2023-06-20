import React from 'react'

export default function SignUp() {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
        <div className="w-1/3 h-1/2 bg-white shadow-sm rounded p-10 mt-32">
            <h1 className="text-2xl mb-10">Sign Up</h1>
            <input placeholder='Username' className="input input-bordered w-full mb-10 bg-white text-black"/>
            <input placeholder='Email' className="input input-bordered w-full mb-10 bg-white text-black"/>
            <input placeholder='Phone Number' className="input input-bordered w-full mb-10 bg-white text-black"/>
            <input placeholder='Password' className="input input-bordered w-full mb-10 bg-white text-black"/>
            <input placeholder='Confirm Password' className="input input-bordered w-full mb-10 bg-white text-black"/>
            <button className="btn btn-secondary w-full">Login</button>
        </div>
    </div>
  )
}
