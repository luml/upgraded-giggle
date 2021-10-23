import React from 'react'
// import axios from 'axios'
import Post from './Post'
import MessageList from './MessageList';

function Hotel() {
  var messageTypes = {
    management: "Management",
    dining: "Dining Services",
    ops: "Operations",
    plumbing: "Plumbing",
    pool: "Pool"
  };

  // var apiUrl = "http://localhost/reactjs/status_api";

  return (
    <React.Fragment>
      <div id="post-status">
        <Post messageTypes={messageTypes} />
      </div>
      <MessageList messageTypes={messageTypes} />
    </React.Fragment>
  );
}

export default Hotel