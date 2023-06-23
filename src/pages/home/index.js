import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {getArticles} from "../../store/slices/blogs/slices"
import { getCategories } from "../../store/slices/blogs/getCategory/slices"
import { getFavBlogs } from "../../store/slices/blogs/favBlogs/slices"

import { FaNewspaper } from 'react-icons/fa'

import NavBar from "../../components/NavBar";
import Welcome from "./components/Welcome";
import SideBar from "./components/SideBar";
import ToTop from '../../components/ToTop';
import SortedDate from './components/SortedDate';
import Footer from '../../components/Footer';
import Pagination from './components/Pagination'


export default function Home() {
	const dispatch = useDispatch()
    const { isLogoutLoading, loading, loadingTop3, currentPage, totalPage, articles, username, categories ,favorites, top3s} = useSelector(state => {
        return {
            isLogoutLoading : state.auth.isLogoutLoading,
            loading : state.blogs.isLoading,
            articles : state.blogs.articles,
            currentPage : state.blogs.currentPage,
            totalPage : state.blogs.totalPage,
            username : state.auth.username,
            categories : state.category.categories,
            favorites : state.favorites.favorites,
            top3s :state.favorites.top3,
            loadingTop3 : state.favorites.isLoading
        }
    })

    const [valueCategory, setValue] = useState({id:"",name:""});
    
    useEffect(() => {
        dispatch(getArticles({
            id_cat : "", 
            page : 1,
            sort : "DESC",
            username : {username}
        }))
        dispatch(getCategories())
        dispatch(getFavBlogs(" "))
    }, [])
    
    
    const onChangePagination = (type) => {
        dispatch(getArticles({ 
            id_cat : valueCategory.id , 
            page : type === "prev" ? currentPage - 1 : currentPage + 1, 
            sort : "DESC" 
        }))
    }    
    
	function onCatClick(id, name){
		setValue({
			id:id,
			name:name
		})
		dispatch(getArticles({
            id_cat : id,
            page : 1,
            sort : "DESC" 
        }))
        dispatch(getFavBlogs({
            cat_name:name
        }))
	}

	console.log(valueCategory);
    return (
      	<div>
			<NavBar/>
			<hr/>
			<Welcome/>


			<div className="ml-28 mt-10">
				<h1 className="text-xl ml-10">Search by Topic</h1>
				<div className="category_select pt-3">
					{categories.map((category) => (
						<option className="btn btn-xs m-1" onClick={() => onCatClick(category.id, category.name)}>{category.name}</option>
					))}
				</div>
			</div>
			<div className='flex flex-col'>
                <h1 className='text-2xl mt-10 ml-20'>
                    {valueCategory.id=="" ? <h1 className="ml-32 w-full flex flex-row">
                        <span className="my-auto mr-3">
                            <FaNewspaper/>
                        </span>
                        <span>
                            Recently Posted on weblogging
                        </span>               
                </h1> : "Category: " + valueCategory.name }
                </h1>
                <Pagination 
                    onChangePagination={onChangePagination}
                    disabledPrev={currentPage === 1}
                    disabledNext={currentPage >= totalPage}
                    />
            </div>
			<section className="flex flex-row flex-auto" >
                
                <SortedDate articles={articles}/>
                    
				<div>
					<SideBar favorites={favorites} categories={categories}/>
				</div>
				
			</section>
                
			
			<Footer/>
			<ToTop/>
		</div>
    )
}
