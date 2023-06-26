import React from "react";
import Card from "../../components/Card";
 


export default function SortedDate(
    articles
) {
    return(
        <div className="p-10 w-3/4" >
            <div className="flex flex-col gap-8">
                {articles.articles.map((article, index) => (
                    <Card
                        BlogId={article.id}
                        author={article.User.username}
                        date={(article.createdAt)}
                        image={article.imageURL}
                        title={article.title}
                        content={article.content}
                        tags={article.Category.name}
                    />
                ))}
            </div>
		</div>
    )
}
