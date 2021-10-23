import React from "react";

function Post({messageTypes}) {
    var typeOptions = Object.keys(messageTypes).map(function (key) {
      if (messageTypes.hasOwnProperty(key)) {
        return (
          <option key={key} value={key}>
            {messageTypes[key]}
          </option>
        );
      } else {
        return null
      }
    });
  
    // so we don't have to type this over and over
    // var defaultType = typeOptions[0].key;
  
    return (
      <form>
        <h3>Post an Update</h3>
  
        <div className="field-group">
          <label htmlFor="txt-message">Message</label>
          <textarea id="txt-message" rows="2" />
        </div>
  
        <div className="field-group">
          <label htmlFor="txt-type">Type</label>
          <select id="txt-type">{typeOptions}</select>
        </div>
  
        <div className="field-group action">
          <input type="submit" value="Post Update" />
        </div>
      </form>
    );
  }

  export default Post