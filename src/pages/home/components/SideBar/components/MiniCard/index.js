import React, {useState} from 'react';
import { FaHeart, FaRegEye, FaRegHeart } from "react-icons/fa";
import {Link} from "react-router-dom"

export default function MiniCard({
    index,
    title,
    total_fav,
    category
}) {

    return (
        <div className="card card-compact w-full h-min bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
            </div>
            <div className="flex flex-row -mt-3">
                <div className='ml-10 -mt-2 mr-auto'>
                    total likes: {total_fav}
                </div>
                <div className="card-actions justify-end mr-5 -mt-2 mb-2">
                    <div className="badge badge-outline">{category}</div>
                </div>
            </div>
        </div>
    )
}
