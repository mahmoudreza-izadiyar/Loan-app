import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  type?: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, type = "text", name, register, error }) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold">{label}</label>
      <input {...register(name)} type={type} className="border p-2 w-full rounded-md" />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
