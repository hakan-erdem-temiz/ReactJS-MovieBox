import React, { Component } from "react";

// INput: liked: bolean
// Output: onClick

class Like extends Component {
  render() {
    let heartClassName = "fa fa-heart";
    if (!this.props.likeData.liked) heartClassName = heartClassName + "-o";
    return (
      <i
        className={heartClassName}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
        onClick={this.props.onLike}
      />
    );
  }
}

export default Like;
