/*
 * @Author: shimingxia
 * @Date: 2022-05-25 20:15:53
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-05-25 20:16:06
 * @Description: 
 */
import React from "react";

const Input = props => {
  return <input {...props} />;
};

// const CustomizeInput = ({value = "", ...props}) => (
//   <div style={{padding: 10}}>
//     <Input style={{outline: "none"}} value={value} {...props} />
//   </div>
// );

class CustomizeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {value = "", ...otherProps} = this.props;
    return (
      <div style={{padding: 10}}>
        <Input style={{outline: "none"}} value={value} {...otherProps} />
      </div>
    );
  }
}

export default CustomizeInput;