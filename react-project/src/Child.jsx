import React from "react";

const Child = (props) => {

    console.log(props);
    
  return (
    <div>
      <h1>Child element</h1>
      <h1>{props.name}</h1>
    </div>
  );
};

export default Child;
