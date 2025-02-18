import { createContext ,useReducer } from "react";

export const PostList = createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
});

const postListReducer = (currPostList, action)=>{
  let newcurrPostList=currPostList;
  if(action.type==="DELETE_ITEM"){
    newcurrPostList=currPostList.filter((post)=>
    post.id!==action.payload.postId)
  }
  else if(action.type==="ADD_ITEM"){
    newcurrPostList= [action.payload, ...currPostList];
  }
  
    return newcurrPostList;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);

  const addPost=(userId,postTitle,postBody,reactions,tags)=>{
    
    dispatchPostList({
      type :"ADD_ITEM",
        payload :{
          id: Date.now(),
          title: postTitle,
          body: postBody,
          reaction: reactions,
          userId: userId,
          tags: tags,

        }

    })
  };

  const deletePost=(postId)=>{
    dispatchPostList({
      type :"DELETE_ITEM",
      payload:{
       postId: postId,
      }
    });
      
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, finally going on a vacation with family during festive breaks",
    reaction: 102,
    userId: "user-9",
    tags: ["vacation", "Family", "Fun"],
  },
  {
    id: "2",
    title: "Graduation Day",
    body: "After four years of rigorous academics finally completes Btech",
    reaction: 200,
    userId: "user-9",
    tags: ["proud", "unbelievable"],
  },
];
export default PostListProvider;
