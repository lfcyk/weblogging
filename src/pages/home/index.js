import React from 'react'
import { useNavigate } from 'react-router-dom';

import NavBar from "../../components/NavBar";
import Welcome from "./components/Welcome";
import SideBar from "./components/SideBar";
import ToTop from '../../components/ToTop';
import SortedDate from './components/SortedDate';
import Footer from '../../components/Footer';


export default function Home() {
	
    

    return (
      	<div>
			<NavBar/>
			<hr/>
			<Welcome/>


			<section className="flex flex-row flex-auto" >
				<SortedDate/>
				<div>
					<SideBar/>
				</div>
				
			</section>
			
			<Footer/>
			<ToTop/>
		</div>
    )
}
