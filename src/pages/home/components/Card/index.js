import React, {useState} from 'react';
import formatDate from '../../../../utils/formatDate';
import { FaHeart, FaRegEye, FaRegHeart } from "react-icons/fa";
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux"
import { likeArticle } from "../../../../store/slices/blogs/slices"


export default function Card({
    BlogId,
    author,
    title,
    date,
    content,
    tags,
    image,
}) {
    const dispatch = useDispatch()
    const likeButton = ()=>{
        dispatch(likeArticle({BlogId}))
    }
    const id = localStorage.getItem("token")
    return (
        <div className="flex">
            <div className="card w-5/6 bg-base-100 shadow-xl mx-auto">
                <figure ><img className="w-full" src={process.env.REACT_APP_IMAGE_URL + image}/></figure>
                <div className="card-body">
                    <h3>{author}</h3>
                    <div className="inline-flex">
                        <h2 className="card-title">
                            <Link to="/blog" state={BlogId}>
                                {title}
                            </Link>
                        </h2>                   
                    </div>                   
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">{tags}</div>
                    </div>
                    <p>{formatDate(date)}</p>
                    <p>{content}</p>                    
                    <button className="z-10 btn w-max ml-auto mr-2 btn-primary" onClick={likeButton}>
                        <FaHeart className="text-4xl text-red-600"/>
                    </button>        
                    
                </div>
            </div>
        </div>
    )
}
