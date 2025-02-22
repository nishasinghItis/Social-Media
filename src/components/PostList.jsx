import Post from "./Post.jsx"
import { useContext } from "react";
import { PostList as PostListData} from "../store/Post-list-store.jsx";
import WelcomeMsg from "./WelcomeMsg.jsx";

const Postlist=()=>{
    const {postList, addInitialPosts} = useContext(PostListData);

     const handleGetPostsClick =()=>{
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then((data) =>{
            addInitialPosts(data.posts);
        });
    };
    return(
        <>
        {postList.length === 0 && (<WelcomeMsg onGetPostsClick={handleGetPostsClick} />)}
       {postList.map((post)=>
       (<Post key={post.id} post={post}/>)
       )}
        </>
    )
}
export default Postlist;