import React, {useState} from "react";
import Video from "./Video";
import VoteButton from "./VoteButton.js"
import CommentSection from "./CommentSection.js"

export default function VideoCard({video}) {

  const [showSection, setSection] = useState(true)

  function handleComment(){
    setSection(!showSection)
  }

  return (
    <>
      <Video video = {video}/>
      {/* {console.log("Here's your data in VideoCard:", video)} */}
      <VoteButton btnClass = "upvotes" upvotes = {video.upvotes} emoji="👍"/>
      <VoteButton btnClass = "downvotes" downvotes = {video.downvotes} emoji="👎"/>
     
      <p></p>
      <button onClick={handleComment}>Hide Comments</button> 
      {showSection ?  <CommentSection commentList = {video.comments} /> : null}
    

    </>
  );
}
