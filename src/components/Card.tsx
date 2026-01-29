import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-cream text-ink border-2 border-ink shadow-brutal hover:shadow-brutalHover transition-shadow duration-200 p-6 md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
