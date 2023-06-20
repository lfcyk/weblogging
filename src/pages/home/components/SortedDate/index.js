import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"

import Card from "../../components/Card";
import Blogs from "../../../../json/Blogs.json";

import {getArticles} from "../../../../store/slices/blogs/slices"
 


export default function SortedDate(
) {
    const dispatch = useDispatch();
    const { currentPage, totalPage, articles, username} = useSelector(state => {
        return {
            currentPage : state.blogs.currentPage,
            totalPage : state.blogs.totalPage,
            articles : state.blogs.articles,
            username : state.auth.username,
        }
    })

    useEffect(()=> {
        dispatch(getArticles({
            id_cat : "",
            page : 1,
            sort : "DESC",
            username : {username}
        }))
    })

    const onChangePagination = (type) => {
        dispatch(getArticles({
            id_cat : "",
            page : type === "prev" ? currentPage - 1 : currentPage + 1,
            sort : "DESC"
        }))
    }

    dispatch(getArticles({
        id_cat : "",
        page : 1,
        sort : "DESC",
        username : {username}
    }))

    console.log(articles);
    const id = localStorage.getItem("token");


    return(
        <div className="p-10 w-3/4" >
            <h1 className='text-2xl mb-5 ml-20'>Recently posted on weblogging</h1>
            <div className="flex flex-col gap-8">
                {articles.map((article, index) => (
                    <Card
                        key={article.id}
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
