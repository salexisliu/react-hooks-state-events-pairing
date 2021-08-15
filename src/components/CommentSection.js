import React, { useState } from "react";
import Comment from "./Comment";

export default function CommentSection({ commentList }) {
  const [commentLi, setCommentLi] = useState(commentList);

  function deleteComment(id) {
    console.log(id);
    const newCommentList = commentLi.filter((comment) => comment.id !== id);
    setCommentLi(newCommentList);
  }

  return commentLi.map((comment) => (
    <>
      <Comment key={comment.id} user={comment.user} comment={comment.comment} />
      <br></br>
      <button onClick={() => deleteComment(comment.id)}>delete</button>
    </>
  ));
}