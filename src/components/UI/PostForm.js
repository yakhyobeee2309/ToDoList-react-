import React, { useState } from 'react';
import { MyButton } from './Button/MyButton';
import { MyInput } from './Input/MyInput';

export const PostForm = ({createPost}) => {
    const [post, setPost] = useState({title: '', stack: ''})

    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now()
        }
        createPost(newPost)
        setPost({title: "", stack: ""})
    }
    return (
        <form>
            <h4 className="text-center"> Create Your first post</h4>
            <MyInput 
                type="text" 
                className="form-control" 
                placeholder="Programming Language" 
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <MyInput
                type="text" 
                className="form-control my-3" 
                placeholder="Enter your favoruite stack"
                value={post.stack}
                onChange={e => setPost({...post, stack: e.target.value})}
            />
            <MyButton onClick={addPost}>Add Post</MyButton>
        </form>
    )
};
