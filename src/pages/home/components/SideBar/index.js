import React from 'react'
import Blogs from "../../../../json/Blogs.json"
import { AiFillLike, AiFillEye } from "react-icons/ai";
import { FaRandom, FaNewspaper } from "react-icons/fa"
import {Link} from "react-router-dom"




export default function SideBar(
) {
    const blogs = Blogs.blogs;
    const random = Math.floor(Math.random() * blogs.length);
    const randomArticleId = blogs[random].id;

    const topics = new Set((blogs.map(a => a.tags.join()).join()).split(","));


  return (
    <div>
        <div className="h-96 -ml-10 mt-28  w-96">
            <div className="form-control">
                <input type="text" placeholder="🔍 Search Posts" className="input input-bordered w-80 rounded-full bg-white" />
            </div>
            
            <section className="flex flex-col gap-1 mt-10">
                <h1 className="w-full flex flex-row">
                    <span className="my-auto mr-3">
                        <FaNewspaper/>
                    </span>
                    <span className="text-lg">
                        Recently Posted on weblogging
                    </span>               
                </h1>

                {/* Most Liked Articles */}
                <h1 className="w-full flex flex-row">
                    <span className="my-auto mr-3">
                        <AiFillLike/>
                    </span>
                    <span className="text-lg">
                        Most Liked Articles
                    </span>               
                </h1>

                <button className="w-full flex flex-row ">
                    <span className="my-auto mr-3">
                        <FaRandom/>
                    </span>
                    <span className="text-lg">
                        <Link to="/blog" state={randomArticleId}>
                            Random Highly-rated Article
                        </Link>
                    </span>               
                </button>
            </section>
            <div className="mt-10">
                <h1 className="text-xl">Search by Topics</h1>
                <div className="pt-3">
                    {Array.from(topics).map((topic) => (
                        <button className="btn btn-xs m-1">{topic}</button>
                    ))}
                </div>
            </div>

        </div>
    </div>
  )
}
