import React, { useRef, useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import { register } from "../../store/slices/auth/slices"
import { faEye, faEyeSlash } from "react-icons/fa"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerValidationSchema } from "../../store/slices/auth/validation.js"



export default function SignUp() {
	const usernameRef = useRef()
	const emailRef = useRef()
	const phoneRef = useRef()
	const passwordRef = useRef()
	const confirmpasswordRef = useRef()


	const dispatch = useDispatch()
	const navigate = useNavigate
	const { isRegisterLoading } = useSelector(state => {
		return {
			id : state.auth.id,
			isRegisterLoading : state.auth.isRegisterLoading
		}
	})
	
	const id = localStorage.getItem("id")
	
	// const eye = <faEye/>;
	// const eye_slash = <faEyeSlash/>;
	const [passwordShown, setPasswordShown] = useState({value : false, field_name : ""});

	
	const onButtonRegister = () => {
		dispatch(register({
			username : usernameRef.current?.value.toString(),
			email : emailRef.current?.value.toString(),
			phone : phoneRef.current?.value.toString(),
			password : passwordRef.current?.value.toString(),
			confirmPassword : confirmpasswordRef.current?.value.toString()
		}))
	}

	// @redirect
	if (id) return <Navigate to="/" replace/>

	return (
		<div className="w-full h-full flex flex-row justify-center items-center">
			<div className="w-1/3 h-1/2 bg-white shadow-sm rounded p-10 mt-32 mb-32">
				<h1 className="text-2xl mb-5">Sign Up</h1>
				<input placeholder='Username' className="input input-bordered w-full mb-5 bg-white text-black"/>
				<input placeholder='Email' className="input input-bordered w-full mb-5 bg-white text-black"/>
				<input placeholder='Phone Number' className="input input-bordered w-full mb-5 bg-white text-black"/>
				<input placeholder='Password' className="input input-bordered w-full mb-5 bg-white text-black"/>
				<input placeholder='Confirm Password' className="input input-bordered w-full mb-5 bg-white text-black"/>
				<button className="btn btn-secondary w-full">Login</button>
			</div>
		</div>
	)
}
