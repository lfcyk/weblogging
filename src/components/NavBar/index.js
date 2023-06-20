import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    
    return (
        <div className="navbar bg-neutral text-neutral-content h-18">
            <div className="flex-1 ml-16">
                <button className="btn btn-ghost normal-case text-xl">
                    <Link to="/">
                        weblogging
                    </Link>
                </button>
            </div>
            <div className="navbar-end gap-4 mr-16">
                <button className="btn-secondary bg-transparent hover:bg-transparent text-white"><Link to="login">Login</Link></button>
                <button className="btn rounded-full"><Link to="signUp">Sign Up</Link></button>
            </div>
        </div>
    )
}
