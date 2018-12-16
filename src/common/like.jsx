import React, { Component } from "react";

// INput: liked: bolean
// Output: onClick

class Like extends Component {
  render() {
    let heartClassName = "fa fa-heart";
    if (this.props.like) heartClassName = heartClassName + "-o";
    return (
      <i
        className={heartClassName}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
        onClick={function() {
          this.props.onLike(!this.props.like, this.props.id);
        }.bind(this)}
      />
    );
  }
}

export default Like;
