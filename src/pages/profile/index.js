import React from 'react'
import NavBar from '../../components/NavBar'
import { useNavigate } from 'react-router-dom';


export default function index() {
	return (
		<div>
			<NavBar/>
			Hello profile
		</div>
	)
}
