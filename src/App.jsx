import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header"
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer"
import SideBar from "./components/SideBar";
import PostList from "./components/PostList";
import PostListProvider from "./store/Post-list-store";
import './App.css'
import { useState } from "react";

function App() {
   
  const [selectedTab ,setSelectedTab]=useState("Home");

  return (
    <>
    <PostListProvider>
    <div className="app-container">
    <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
    <div className="content">
    <Header/>
    {selectedTab ==="Home" ?(<PostList/> ):(<CreatePost/>)}
    <Footer></Footer>
    </div>
    </div>
    </PostListProvider>
    </>
  )
}

export default App
