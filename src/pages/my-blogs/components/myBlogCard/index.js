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
            
            <button className={`z-10 btn w-max ml-auto -mb-16 mr-2 ${deleting? "hidden" : ""}`}>
                <AiFillDelete className="text-4xl text-red-600" onClick={() => {deleteConfirm(true); console.log(BlogId, deleting)}}/>
            </button>
             
            <div className={`bg-white w-max p-3 rounded ml-auto -mb-28 mr-3 z-10 ${!deleting ? "hidden" : ""}`} >
                <p>
                    Delete this Blog?    
                </p>
                <br/>
                <button 
                    className="btn btn-error btn-xs pr-2"
                    onClick={()=>{
                        onButtonDelete(BlogId)
                        deleteConfirm(false)
                    }}
                    >
                    Confirm
                </button>

                <button 
                    className="link link-hover pl-2"
                    onClick={()=>deleteConfirm(false)}
                    >
                    Cancel
                </button>
            </div>


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
            <dialog id="DeleteConfirmation" className="modal ">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="">Close</button>
                    <button className="btn">Close</button>
                    </div>
                </form>
            </dialog> 
        </div>
    )
}