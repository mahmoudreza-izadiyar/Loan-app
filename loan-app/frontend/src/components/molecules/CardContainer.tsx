import React from "react";

interface CardContainerProps {
  children: React.ReactNode;
  title?: string;
}

const CardContainer: React.FC<CardContainerProps> = ({ children, title }) => {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-lg">
      {title && <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>}
      {children}
    </div>
  );
};

export default CardContainer;