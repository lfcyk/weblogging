import { React, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../store/slices/auth/slices"

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading } = useSelector(state => {
        return {
            loading : state.auth.isLoginLoading,
        }
    })

    const usernameRef = useRef();
    const passwordRef = useRef();

    const onButtonLogin = () => {
        const input = usernameRef.current?.value
        const email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        const phone_pattern = /0[0-9]/
        let username = ""
        let email = ""
        let phone = ""
        const password = passwordRef.current?.value

        email_pattern.test(input) ? email = input : phone_pattern.test(input) ? phone = input : username = input


        dispatch(login({ username, email, phone, password }))
    }

    const id = localStorage.getItem("id")
  
    // @redirect
    if (id ) {
        return <Navigate to="/" replace/>
    }

    return (
        <div className="w-full h-full flex flex-row justify-center items-center">
            <div className="w-1/3 h-1/2 bg-white shadow-sm rounded p-10 mt-32 mb-32">
                <h1 className="text-2xl mb-10">Login</h1>
                <input ref={usernameRef} placeholder='Username' className="input input-bordered w-full mb-10 bg-white text-black"/>
                <input type="password" ref={passwordRef} placeholder='Password' className="input input-bordered w-full mb-10 bg-white text-black"/>
                <button className="btn btn-secondary w-full" onClick={onButtonLogin}>Login</button>
            </div>
        </div>
    )
}
