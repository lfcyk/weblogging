import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteBlog, getArticles } from "../../../../store/slices/blogs/slices"
import { AiFillDelete } from "react-icons/ai"

export default function MyBlogCard ({
    title = "",
    content = "",
    thumbnail = "",
    BlogId = "",
    category = ""
}) {
    const dispatch = useDispatch()
    const [deleting,deleteConfirm] = useState(false)

    const onButtonDelete = ()=>{
        dispatch(deleteBlog(BlogId))
        dispatch(getArticles({
            id_cat : "", 
            page : 1,
            sort : "ASC"
        }))
    }

    return (
        <div className="card card-compact w-72 h-min bg-base-100 shadow-xl">
            <button className="z-10 btn w-max ml-auto -mb-16 mr-2">
                <AiFillDelete className="text-4xl text-red-600"/>
            </button>
            <figure ><img className="w-full z-0" src={process.env.REACT_APP_IMAGE_URL + thumbnail}/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
            </div>
            <div className="flex flex-row">
                <div className="card-actions ml-3 mb-3">
                    <div className="badge badge-outline">{category}</div>
                </div>
            </div>
            
        </div>
    )
}