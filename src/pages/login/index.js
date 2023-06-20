import React from 'react'
import { useRef } from "react"

export default function Login() {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const onButtonLogin = () => {
        console.log(usernameRef.current?.value, passwordRef.current?.value)
    }
    return (
        <div className="w-full h-full flex flex-row justify-center items-center">
            <div className="w-1/3 h-1/2 bg-white shadow-sm rounded p-10 mt-64">
                <h1 className="text-2xl mb-10">Login</h1>
                <input ref={usernameRef} placeholder='Username' className="input input-bordered w-full mb-10 bg-white text-black"/>
                <input ref={passwordRef} placeholder='Password' className="input input-bordered w-full mb-10 bg-white text-black"/>
                <button className="btn btn-secondary w-full" onClick={onButtonLogin}>Login</button>
            </div>
        </div>
    )
}
