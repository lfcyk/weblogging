import React from "react"

export default function LikedBlogCard ({
    title = "",
    content = "",
    category = ""
}) {
    return (
        <div className="card card-compact w-96 h-min bg-base-100 shadow-xl">
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

    
