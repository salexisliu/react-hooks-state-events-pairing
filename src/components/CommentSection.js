import React from "react"
import Comment from "./Comment"

export default function CommentSection({commentList}){

  return (

  commentList.map((comment) => <Comment
  key = {comment.id}
  user={comment.user} 
  comment={comment.comment}/>)
  )



}

 