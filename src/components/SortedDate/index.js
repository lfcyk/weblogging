import React from 'react'
import Card from "../../components/Card";
import Blogs from "../../json/Blogs.json";
 

export default function SortedDate(
) {
    const blogs = Blogs.blogs;
	const sortedDate = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

    return(
        <div className="p-10 w-3/4" >
            <h1 className='text-2xl mb-5 ml-20'>Recently posted on weblogging</h1>
            <div className="flex flex-col gap-8">
                {sortedDate.map((blog, index) => (
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
