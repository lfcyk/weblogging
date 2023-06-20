import React, {useState} from 'react';
import formatDate from '../../utils/formatDate';
import { FaHeart, FaRegEye, FaRegHeart } from "react-icons/fa";
import {Link} from "react-router-dom"

export default function Card({
    id,
    author,
    title,
    date,
    views,
    likes,
    content,
    tags,
    image,
    isLiked,
}) {
    const [liked, setLiked] = useState(isLiked);
    const [likesCount, setLikesCount] = useState(likes);
    const handleClick = () => {
        setLiked(!liked);
        liked ? setLikesCount(likesCount - 1) : setLikesCount(likesCount + 1);
        // console.log(likesCount);
    
  };
  return (
        <div className="flex">
            <div className="card w-5/6 bg-base-100 shadow-xl mx-auto">
                <figure ><img className="w-full" src={image}/></figure>
                <div className="card-body">
                    <h3>{author}</h3>
                    <div className="inline-flex">
                        <h2 className="card-title">
                            <Link to="/blog" state={id}>
                                {title}
                            </Link>
                        </h2>                   
                    </div>                   
                    <div className="card-actions justify-start">
                        {tags.map((tag) => (
                            <div className="badge badge-outline">{tag}</div>
                        ))}
                    </div>
                    <p>{formatDate(date)}</p>
                    <p>{content}</p>                    
                    <div className="flex flex-row gap-7">                             
                        <div className="justify-items-center flex flex-col ml-auto">
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
    )
}
