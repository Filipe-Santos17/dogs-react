import React from "react";

const ErrorMsg = ({err}) => {
  if (!err) return null;
  return <p className="error-message">{err}</p>;
};

export default ErrorMsg;
