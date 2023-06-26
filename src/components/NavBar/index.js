import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate  } from "react-router-dom"
import { logout } from "../../store/slices/auth/slices"
import { Link } from 'react-router-dom'

export default function NavBar() {
    const dispatch = useDispatch()
	const navigate = useNavigate()
	const id = localStorage.getItem("id")
	const onButtonLogout = () => {
		navigate("/login")
        dispatch(logout()) 
    }
    
    return (
        <div className="navbar bg-neutral text-neutral-content h-18">
            <div className="flex-1 ml-16">
                <button className="btn btn-ghost normal-case text-xl">
                    <Link to="/">
                        weblogging
                    </Link>
                </button>
            </div>
            {id? "" : <div className="navbar-end gap-4 mr-16">
                <button className="btn-secondary bg-transparent hover:bg-transparent text-white"><Link to="login">Login</Link></button>
                <button className="btn rounded-full"><Link to="signUp">Sign Up</Link></button>
            </div>}
            {id? <div className="navbar-end gap-4 mr-16">
                <button className="btn rounded-full"><Link to="create-blog">Write Blog</Link></button>
                <button className="btn rounded-full"><Link to="myblogs">My Blogs</Link></button>
                <button className="btn rounded-full"><Link to="Profile">Profile</Link></button>
                <button className="btn rounded-full" onClick={onButtonLogout}>Log Out</button>
            </div> : "" }

            
        </div>
    )
}
