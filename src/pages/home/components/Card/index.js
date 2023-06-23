import React, {useState} from 'react';
import formatDate from '../../../../utils/formatDate';
import { FaHeart, FaRegEye, FaRegHeart } from "react-icons/fa";
import {Link} from "react-router-dom"

export default function Card({
    key,
    author,
    title,
    date,
    content,
    tags,
    image,
}) {

    return (
        <div className="flex">
            <div className="card w-5/6 bg-base-100 shadow-xl mx-auto">
                <figure ><img className="w-full" src={process.env.REACT_APP_IMAGE_URL + image}/></figure>
                <div className="card-body">
                    <h3>{author}</h3>
                    <div className="inline-flex">
                        <h2 className="card-title">
                            <Link to="/blog" state={key}>
                                {title}
                            </Link>
                        </h2>                   
                    </div>                   
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">{tags}</div>
                    </div>
                    <p>{formatDate(date)}</p>
                    <p>{content}</p>                    
                    <div className="flex flex-row gap-7">                             
                        <div className="justify-items-center flex flex-col">
                            <div className="text-3xl mt-4 text-red-600 m-auto">
                                <FaHeart />
                            </div>
                        </div>         
                    </div>                     
                    
                </div>
            </div>
        </div>
    )
}
