import React from "react"

export default function Video({video}){
  return(
    <>
   {console.log("Here's your data in Video:", video)}
 
      <iframe style={{padding: "50px"}}
       width="919"
      height="525"
      src={video.embedUrl}
      frameBorder="0"
      allowFullScreen
      title="Thinking in React"/>
      <h2>{video.title}</h2>
      <p>{video.views} | {video.createdAt}</p>
      </>)
  
}
