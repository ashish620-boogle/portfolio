import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-canvas border border-line p-6 md:p-8 rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
