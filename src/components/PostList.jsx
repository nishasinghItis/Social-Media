import Post from "./Post.jsx"
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData} from "../store/Post-list-store.jsx";
import WelcomeMsg from "./WelcomeMsg.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

const Postlist=()=>{
    const {postList, addInitialPosts} = useContext(PostListData);
     const [fetching, setFetching] =useState(false);

    useEffect(() =>{
        setFetching(true);
        console.log("fetch srarted");
            fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((data) =>{
                addInitialPosts(data.posts);
                setFetching(false);
                console.log('fetch returnedd')            
    });
    console.log('fetch ended');
},[]);
   
    return(
        <>
        {fetching && <LoadingSpinner/>}
       {!fetching && postList.length === 0 && (<WelcomeMsg />)}
       {!fetching && postList.map((post)=>
       (<Post key={post.id} post={post}/>)
       )}
        </>
    )
}
export default Postlist;