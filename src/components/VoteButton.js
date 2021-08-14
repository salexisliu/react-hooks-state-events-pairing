import React, { useState } from "react";

export default function VoteButton({ btnClass, upvotes, downvotes, emoji }) {
  
  const [votes, setVotes] = useState(
    btnClass === "upvotes" ? upvotes : downvotes
  );

  function vote(e) {
    setVotes(btnClass === "upvotes" ? votes + 1 : votes - 1);
  }

  return (
    <>
      <button className={btnClass} onClick={(e) => vote(e)}>
        {votes}
        {emoji}
      </button>
    </>
  );
}
