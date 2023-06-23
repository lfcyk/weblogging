import React from 'react'
import Blogs from "../../../../json/Blogs.json"
import { AiFillLike  } from "react-icons/ai";
import { FaRandom  } from "react-icons/fa"
import {Link} from "react-router-dom"

import MiniCard from "./components/MiniCard"




export default function SideBar(
    prop
) {

    
    const blogs = Blogs.blogs;
    const random = Math.floor(Math.random() * blogs.length);
    const randomArticleId = blogs[random].id;



  return (
    <div>
        <div className="h-96 -ml-10 mt-10  w-96">           
            <section className="flex flex-col gap-1 mt-10">
                {/* Most Liked Articles */}
                <h1 className="w-full flex flex-row">
                    <span className="my-auto mr-3">
                        <AiFillLike/>
                    </span>
                    <span className="text-lg">
                        Most Liked Articles
                    </span>               
                </h1>

                {prop.favorites.filter((favorite, index)=>index<10).map((favorite, index) => {
                    return <MiniCard key={favorite.id}
                        index={index}
                        title={favorite.title}
                        total_fav={favorite.total_fav}
                        category={favorite.Category.name}/>
                })}
            </section>
        </div>
    </div>
  )
}
