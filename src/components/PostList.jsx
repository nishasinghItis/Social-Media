import Post from "./Post.jsx"
import { useContext, useEffect } from "react";
import { PostList as PostListData} from "../store/Post-list-store.jsx";
import WelcomeMsg from "./WelcomeMsg.jsx";

const Postlist=()=>{
    const {postList, addInitialPosts} = useContext(PostListData);
     
    useEffect(() =>{
            fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((data) =>{
                addInitialPosts(data.posts);
            
    },[]);
});
   
    return(
        <>
        {postList.length === 0 && (<WelcomeMsg />)}
       {postList.map((post)=>
       (<Post key={post.id} post={post}/>)
       )}
        </>
    )
}
export default Postlist;