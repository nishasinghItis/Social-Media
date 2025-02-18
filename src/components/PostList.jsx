import Post from "./Post.jsx"
import { useContext } from "react";
import { PostList as PostListData} from "../store/Post-list-store.jsx";
const Postlist=()=>{
    const {postList} = useContext(PostListData);
    return(
        <>
       {postList.map((post)=>
       (<Post key={post.id} post={post}/>)
       )}
        </>
    )
}
export default Postlist;