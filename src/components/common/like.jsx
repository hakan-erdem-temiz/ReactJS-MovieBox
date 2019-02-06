import React from "react";

// INput: liked: bolean
// Output: onClick

const Like = props => {
  let heartClassName = "fa fa-heart";
  if (!props.likeData.liked) heartClassName = heartClassName + "-o";
  return (
    <i
      className={heartClassName}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={props.onLike}
    />
  );
};

// class Like extends Component {
//   render() {
//     let heartClassName = "fa fa-heart";
//     if (!this.props.likeData.liked) heartClassName = heartClassName + "-o";
//     return (
//       <i
//         className={heartClassName}
//         aria-hidden="true"
//         style={{ cursor: "pointer" }}
//         onClick={this.props.onLike}
//       />
//     );
//   }
// }

export default Like;
