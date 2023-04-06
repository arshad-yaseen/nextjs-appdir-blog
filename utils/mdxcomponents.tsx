import React from "react";


const Button = (props: any) => (
 <button {...props} text={props.text} style={{backgroundColor:"blue",borderRadius:"5px",color:"white",padding:"2px 10px"}}  />
);

const MDXComponents = {
  Button,
};

export default MDXComponents;