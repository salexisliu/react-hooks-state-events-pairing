import video from "../data/video.js";
import React from "react";
import VideoCard from "./VideoCard.js";

function App() {
 

  return (
    <div className="App">
      <VideoCard video = {video} comments = {video.comments} />
    </div>
  );
}

export default App;


