import React, { PropsWithChildren } from "react";


const Button = (props: PropsWithChildren) => (
 <button {...props} style={{backgroundColor:"blue",borderRadius:"5px",color:"white",padding:"2px 10px"}}  >{props.children}</button>
);

const MDXComponents = {
  Button,
};

export default MDXComponents;