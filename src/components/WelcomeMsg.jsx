const WelcomeMsg= ({onGetPostsClick})=>{
    return <>
    <center className="welcomeMsg">
    <h1 >There are no post yet</h1>
    <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Fetch post from server</button>
    </center>
    </>
}
export default WelcomeMsg;