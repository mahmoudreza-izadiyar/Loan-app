import React from "react";

interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, type = "button", disabled }) => {
  return (
    <button 
      type={type} 
      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;