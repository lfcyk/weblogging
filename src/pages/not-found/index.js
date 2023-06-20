import React from 'react'
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div> 
		<div className='App h-full py-6 px-6'>
			<div className="flex flex-col justify-center h-2/3 w-max mx-auto mt-[200px]">
				<h1 className="text-[200px] mx-auto font-bold -mb-16">404</h1>
				<h1 className="mx-auto text-5xl">Page Not Found</h1>
				<button className="btn mt-10">
					<Link to="/">
						click me to go back to weblogging
					</Link>
				</button>
			</div>
    	</div>
    </div>
  )
}
