import { createContext ,useReducer } from "react";

export const PostList = createContext({
    postList:[],
    addPost:()=>{},
    addInitialPosts:()=>{},
    deletePost:()=>{},
});

const postListReducer = (currPostList, action)=>{
  let newcurrPostList=currPostList;
  if(action.type==="DELETE_ITEM"){
    newcurrPostList=currPostList.filter((post)=>
    post.id!==action.payload.postId);
  }
  else if(action.type==="ADD_INITIAL_ITEM"){
 
    newcurrPostList=action.payload.posts;
  }
  else if(action.type==="ADD_ITEM"){
    newcurrPostList= [action.payload, ...currPostList];
  }
  
    return newcurrPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,[]);

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

  const addInitialPosts=(posts)=>{
    
    dispatchPostList({
      type :"ADD_INITIAL_ITEM",
        payload :{
         posts ,

        },
    });
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
    <PostList.Provider value={{ postList, addPost, addInitialPosts, deletePost}}>
      {children}
    </PostList.Provider>
  );
};


export default PostListProvider;
