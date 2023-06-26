import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getArticles} from "../../store/slices/blogs/slices"
import { getLikedArticles } from "../../store/slices/blogs/myLikedArticles/slices"
import MyBlogCard from "./components/myBlogCard"
import Pagination from "../home/components/Pagination"
import { useNavigate } from "react-router-dom"
import LikedBlogCard from "./components/likedBlogCard"

export default function MyBlogs() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { filteredArticles, likedArticles, currentLikedPages } = useSelector(state => {
        return {
            filteredArticles : state.blogs.filteredArticles,
            likedArticles : state.liked.likedArticles,
            currentLikedPages : state.liked.currentPage,
        }
    })

    const onLikedArticles = (type) => {
        dispatch(getLikedArticles({ 
            page : type === "prev" ? currentLikedPages - 1 : currentLikedPages + 1, 
        }))
    }


    useEffect(() => {
        dispatch(getLikedArticles({
            page : 1
        }))
        dispatch(getArticles({
            id_cat : "", 
            page : 1,
            sort : "ASC"
        }))
    }, [])

    console.log(likedArticles);
  return (
    <div>
        <div className="flex flex-row flex-auto">
            <div className=" w-2/3 h-screen">
                <h1 className="text-5xl font-bold w-max mx-auto mt-10 mb-14"> 
                    Blogs You Have Written
                </h1>
                <div className="ml-20">
                    {filteredArticles.map((filteredArticle, index) => {
                        return <MyBlogCard key={filteredArticle.id}
                            title={filteredArticle.title}
                            content={filteredArticle.content}
                            thumbnail={filteredArticle.imageURL}
                            BlogId = {filteredArticle.id}
                            category = {filteredArticle?.Category?.name}/>
                            }
                        )
                    }
                </div>
            </div>
            <div className="bg-white w-1/3 h-screen">
                <h1 className="text-5xl font-bold w-max mx-auto mt-10 mb-10"> 
                    Blogs You Loved
                </h1>
                <div className="mx-10 flex flex-col w-full gap-5">
                    {likedArticles.map((likedArticle, index) => {
                        return <LikedBlogCard key={likedArticle.id}
                            title={likedArticle.Blog?.title}
                            content={likedArticle.Blog?.content}
                            category = {likedArticle.Blog?.Category?.name}/>
                            }
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
