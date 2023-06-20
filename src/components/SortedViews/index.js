import React from 'react'
import Card from "../../components/Card";
import Blogs from "../../json/Blogs.json";
 

export default function SortedViews(
    
) {
    const blogs = Blogs.blogs;
    const sortedViews = blogs.sort((a,b) => b.views - a.views);

    return(
        <div className="p-10 w-3/4" >
            <h1 className='text-2xl mb-7'>Most Viewed Articles</h1>
            <div className="flex flex-col gap-8">
                {sortedViews.map((blog, index) => (
                    <Card
                        id={blog.id}
                        key={index}
                        author={blog.author}
                        date={(blog.date)}
                        image={blog.image}
                        likes={blog.likes}
                        title={blog.title}
                        views={blog.views}
                        content={blog.content}
                        tags={blog.tags}
                        isLiked={blog.isLiked}
                    />
                ))}
            </div>
		</div>
    )
}
