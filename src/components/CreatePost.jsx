import { useRef } from "react";
import { useContext } from "react";
import { PostList } from "../store/Post-list-store";

const CreatePost = () => {

  const {addPost} =useContext(PostList)

  const userIdElement =useRef();
  const postTitleElement =useRef();
  const postBodyElement =useRef();
  const reactionsElement =useRef();
  const tagsElement =useRef();

  const handleSubmit =(event)=>{
    event.preventDefault();

    const userId =userIdElement.current.value;
    const postTitle =postTitleElement.current.value;
    const postBody =postBodyElement.current.value;
    const reactions =reactionsElement.current.value;
    const tags =tagsElement.current.value.split(" ");
    addPost(userId,postTitle,postBody,reactions,tags);

    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";
  }

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>

      <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id here
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Your user Id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="How are you feeling today?"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={postBodyElement}
            rows="4"
            className="form-control"
            id="body"
            placeholder="Tell us more about you?"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Reactions
          </label>
          <input
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="reactions"
            placeholder="Your Post Reactions"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags 
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Enter your Tags with space"
          />
        </div>


        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
