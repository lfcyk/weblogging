import React, {useState} from 'react'
import { useLocation } from "react-router-dom"
import { FaHeart, FaRegEye, FaRegHeart } from "react-icons/fa";



import Blogs from "../../json/Blogs.json";
import NavBar from "../../components/NavBar";
import formatDate from '../../utils/formatDate';

export default function BlogDetail(
) {
	let {state} = useLocation();
	// console.log(state);

	const blog=Blogs.blogs.find((blog) => blog.id === state);
	const id=blog.id;
	const author=blog.author;
	const date=(blog.date);
	const image=blog.image;
	const likes=blog.likes;
	const title=blog.title;
	const views=blog.views;
	const content=blog.content;
	const tags=blog.tags;
	const isLiked=blog.isLiked;
	

	const [liked, setLiked] = useState(isLiked);
	const [likesCount, setLikesCount] = useState(likes);
	const handleClick = () => {
		setLiked(!liked);
		liked ? setLikesCount(likesCount - 1) : setLikesCount(likesCount + 1);
	};
  
  	return (
        <div>
            <NavBar/>
            <div className="flex mt-10">
				<div className="card w-5/6 bg-base-100 shadow-xl mx-auto">
					
					<div className="card-body">
						<h3>{author}</h3>
						<div className="inline-flex">
							<h2 className="card-title">{title}</h2>                   
						</div>                   
						<div className="card-actions justify-start">
							{tags.map((tag) => (
								<div className="badge badge-outline">{tag}</div>
							))}
						</div>
						<p>{formatDate(date)}</p>
						<figure ><img className="w-full" src={image}/></figure>
						<p>{content}</p>                    
						<div className="flex flex-row">                             
							<div className="justify-items-center flex flex-col mr-auto">
								<div className="text-3xl mt-4 m-auto">
									<FaRegEye/>
								</div>
								<div className="m-auto">{views} views</div>
							</div>
							<div className="justify-items-center flex flex-col">
								<div className="text-3xl mt-4 text-red-600 m-auto">
									{liked ? <FaHeart /> : <FaRegHeart />}
								</div>
								<div className="m-auto">{likes} likes</div>
							</div>         
						</div>                     
						
					</div>
				</div>
			</div>
        </div>
  	)
}
