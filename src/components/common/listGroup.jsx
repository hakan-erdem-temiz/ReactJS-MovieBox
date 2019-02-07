import React, { Component } from "react";

// class ListGroup extends Component {
//   state = { width: window.innerWidth };

//   updateDimensions = () => {
//     this.setState({ width: window.innerWidth });
//     console.log(window.innerWidth);
//   };

//   componentWillMount() {
//     this.updateDimensions();
//   }
//   componentDidMount() {
//     window.addEventListener("resize", this.updateDimensions);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("resize", this.updateDimensions);
//   }

//   render() {
//     const { genres, textProperty, valueProperty, selectedItem } = this.props;
//     const className = "list-group-item list-group-item-action";
//     return (
//       <ul
//         className="list-group"
//         // style={
//         //   this.state.width >= 768
//         //     ? { minWidth: "100px" }
//         //     : { minWidth: "600px" }
//         // }
//       >
//         {console.log(
//           "innerWidth:" + window.innerWidth + "state:" + this.state.width
//         )}
//         {genres.map(item => (
//           <li
//             className={
//               item === selectedItem ? className + " active" : className
//             }
//             style={{ cursor: "pointer" }}
//             key={item[valueProperty]}
//             onClick={() => this.props.onItemSelect(item)}
//           >
//             {item[textProperty]}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

const ListGroup = props => {
  const { genres, textProperty, valueProperty, selectedItem } = props;
  const className = "list-group-item list-group-item-action";
  return (
    <ul className="list-group">
      {console.log("tests:" + window.innerWidth > 768)}
      {genres.map(item => (
        <li
          className={item === selectedItem ? className + " active" : className}
          style={{ cursor: "pointer" }}
          key={item[valueProperty]}
          onClick={() => props.onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
