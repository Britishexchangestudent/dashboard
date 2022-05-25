import React from "react";

function Button({ color, bgColor, size, text, borderRadius }) {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl transition-all duration-200 cursor-pointer`}
    >
      {text}
    </button>
  );
}

export default Button;
