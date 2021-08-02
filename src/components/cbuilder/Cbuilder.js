import React from "react";

export const Cbuilder = ({children, ...props}) => {

  return (
    <form {...props}  noValidate>
      {children}
    </form>
  );
};
