import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-mist/90 text-ink border border-line shadow-soft hover:shadow-lift transition-all duration-200 p-6 md:p-8 rounded-2xl hover:-translate-y-1 hover:border-accent/60 ${className}`}
    >
      {children}
    </div>
  );
}
