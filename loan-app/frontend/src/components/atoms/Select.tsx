import React from "react";

interface SelectProps {
  label: string;
  name: string;
  options: string[];
  register: any;
  error?: string;
}

const Select: React.FC<SelectProps> = ({ label, name, options, register, error }) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold">{label}</label>
      <select {...register(name)} className="border p-2 w-full">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Select;
