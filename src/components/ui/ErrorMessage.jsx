import React from "react";

const ErrorMessage = ({ title, className }) => {
  return (
    <p
      className={`font-bold font-serif text-center text-orange-400 ${className}`}
    >
      {title}
    </p>
  );
};

export default ErrorMessage;
