import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className="button bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out" id="btn">
        {title}
      </button>
    </div>
  );
};

export default Button;
