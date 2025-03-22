import React from "react";

export const GradientCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`relative p-6 rounded-3xl shadow-lg mt-8 mb-8 ${className}`}
    >
      {children}
    </div>
  );
};
