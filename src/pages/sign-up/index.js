import React, { useRef, useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import { register } from "../../store/slices/auth/slices"
import { faEye, faEyeSlash } from "react-icons/fa"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerValidationSchema } from "../../store/slices/auth/validation.js"

const initialValuesSignUp = {
    username:"",
    email: "",
    phone:"",
    password: "",
    confirmpassword: "",
}

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
			confirmPassword : confirmpasswordRef.current?.value.toString(),
			FE_URL: "https://sensational-boba-4162ba.netlify.app/"
		}))
	}

	// @redirect
	if (id) return <Navigate to="/" replace/>

	return (
		<div className="w-screen h-screen flex flex-row justify-center items-center">
			{/* <div className="w-1/3 h-1/2 bg-white shadow-sm rounded p-10 mt-32 mb-32">
				<h1 className="text-2xl mb-5">Sign Up</h1>
				<input placeholder='Username' className="input input-bordered w-full mb-5 bg-white text-black"/>
				<input placeholder='Email' className="input input-bordered w-full mb-5 bg-white text-black"/>
				<input placeholder='Phone Number' className="input input-bordered w-full mb-5 bg-white text-black"/>
				<input placeholder='Password' className="input input-bordered w-full mb-5 bg-white text-black"/>
				<input placeholder='Confirm Password' className="input input-bordered w-full mb-5 bg-white text-black"/>
				<button className="btn btn-secondary w-full">Sign Up</button>
			</div> */}
			<Formik 
				initialValues={initialValuesSignUp}
				validationSchema={registerValidationSchema}
				>
			{({ errors, touched, isSubmitting }) => {
				return (
					<div className="container ">
					<div className="bg-white shadow-sm rounded p-6 mt-32 mb-32 w-[500px] mx-auto flex flex-col">
						<Form>
						<h1>Sign up to continue</h1>
						<div className="form-row mt-5">
							<label >Username</label>
							<Field
								type="username"
								name="username"
								id="username"
								innerRef = {usernameRef}
								className={
									errors.username && touched.username ? "input-error input input-md w-full " : "input input-bordered input-md w-full "
								}
								/>
							<ErrorMessage name="username" component="span" className="error" />
						</div>

						<div className="form-row">
							<label >Email</label>
							<Field
								type="email"
								name="email"
								id="email"
								innerRef={emailRef}
								className={
									errors.email && touched.email ? "input-error input input-md w-full " : "input input-bordered input-md w-full "
								}
								/>
							<ErrorMessage name="email" component="span" className="error" />
						</div>

						<div className="form-row">
							<label >Phone</label>
							<Field
								type="phone"
								name="phone"
								id="phone"
								innerRef={phoneRef}
								className={
									errors.phone && touched.phone ? "input-error input input-md w-full " : "input input-bordered input-md w-full "
								}
								/>
							<ErrorMessage
								name="phone"
								component="span"
								className="error"
								/>
						</div>

						<div className="form-row">
							<label >Password</label>
							<div className="form-row-pass">
							<Field
								type={passwordShown.value && passwordShown.field_name === "password" ? "text" : "password"}
								name="password"
								id="password"
								innerRef={passwordRef}
								className={
									errors.password && touched.password ? "input-error input input-md w-full " : "input input-bordered input-md w-full "
								}
								/>
							<i className="eye-password" 
								onClick={()=>{
									setPasswordShown({value : !passwordShown.value, field_name : "password" })
								}}
								onMouseLeave={()=>{
									setPasswordShown({value : !passwordShown.value, field_name : "" })
								}}
								>
								{passwordShown.value && passwordShown.field_name === "password" ? <faEyeSlash/> : <faEye/>}
							</i>
							</div>
							<ErrorMessage
								name="password"
								component="span"
								className="error"
								/>
						</div>
						<div className="form-row">
							<label >Confirm Password</label>
							<div className="form-row-pass">
							<Field
								type={passwordShown.value && passwordShown.field_name ==="confirm" ? "text" : "password"}
								name="confirm"
								id="confirm"
								innerRef={confirmpasswordRef}
								className={
									errors.confirm && touched.confirm ? "input-error input input-md w-full " : "input input-bordered input-md w-full "
								}
								/>
							<i className="eye-password" 
								onClick={()=>{
									setPasswordShown({value : !passwordShown.value, field_name : "confirm" })
								}}
								onMouseLeave={()=>{
									setPasswordShown({value : !passwordShown.value, field_name : "" })
								}}
								>
								{passwordShown.value && passwordShown.field_name ==="confirm" ? <faEyeSlash/> : <faEye/>}
							</i>
							</div>
							<ErrorMessage
								name="confirm"
								component="span"
								className="error"
								/>
						</div>

						<button
							type="button"
							className="btn btn-neutral mx-auto mt-5"
							disabled={isSubmitting || isRegisterLoading}
							onClick={onButtonRegister}
							>
							{ isSubmitting || isRegisterLoading ?  <span className="loading loading-spinner"></span> : null }
							Register
						</button>
						</Form>
					</div>
				</div>
				);
			}}
			</Formik>
		</div>
	)
}
