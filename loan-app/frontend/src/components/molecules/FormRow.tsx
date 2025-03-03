import React from "react";

interface FormRowProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
}

const FormRow: React.FC<FormRowProps> = ({ children, columns = 1 }) => {
  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3"
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-4`}>
      {children}
    </div>
  );
};

export default FormRow;