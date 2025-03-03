import React from "react";
import Input from "../atoms/Input";
import Select from "../atoms/Select";
import { UseFormRegister } from "react-hook-form";

interface LoanFieldProps {
  label: string;
  name: string;
  type?: string;
  options?: string[];
  register: UseFormRegister<any>;
  error?: string;
}

const LoanField: React.FC<LoanFieldProps> = ({ label, name, type, options, register, error }) => {
  return options ? (
    <Select label={label} name={name} options={options} register={register} error={error} />
  ) : (
    <Input label={label} name={name} type={type} register={register} error={error} />
  );
};

export default LoanField;
