import React from "react";
import VoteButton from "./VoteButton.js"


export default function Comment({user, comment}){ 
return (
<>
  <h2>{user}</h2>
  <p>{comment}</p>
  <VoteButton btnClass = "upvotes" upvotes = {0} emoji="👍"/>
  <VoteButton btnClass = "downvotes" downvotes = {0} emoji="👎"/>

</>
)
}