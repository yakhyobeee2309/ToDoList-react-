import React, { useMemo, useState } from "react";
import { FilterAndSearch } from "./components/FilterAndSearch";
import { TableList } from "./components/TableList";
import { PostForm } from "./components/UI/PostForm";
import './style/style.css';

function App () {
    const [posts, setposts] = useState([
        {id: 1, title: 'JavaScript', stack: 'MERN Stack'},
        {id: 2, title: 'Python', stack: 'Full-Stack'},
        {id: 3, title: 'C#', stack: 'Cyber'},
        {id: 4, title: 'Goo', stack: 'BackEnd'}
    ])
    const [filter, setFilter] = useState({sort: "", query: ""})
{/*----------------------------*/}
    {/*-- Sort Name --*/}
    const SortedPosts = useMemo (() => {
        if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])
{/*----------------------------*/}
    {/*-- Search --*/}
    const sortAndSearchPosts = useMemo(() => {
        return SortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()))
    },[filter.query, SortedPosts])
{/*----------------------------*/}
    {/*-- Add Post --*/}
    const createPost = (newPost) => {
        setposts([...posts, newPost])
    }
{/*----------------------------*/}
    {/*-- Delete --*/}
    const RemovePost = (post) => {
        setposts(posts.filter(s => s.id !== post.id))
    }

    return (
        <div className="app w-50 mx-auto">
            <PostForm createPost={createPost} /> {/*--- input&addPost ---*/}
            <FilterAndSearch filter={filter} setFilter={setFilter} /> {/*--- Filter ---*/}
            {/*--- Map&<thead>&<tbody> ---*/}
            {sortAndSearchPosts.length ? <TableList remove ={RemovePost} posts={sortAndSearchPosts} title="Programming Language" /> : <h6 className="my-3 text-center">Not found</h6>}
        </div>
    )
}
export default App