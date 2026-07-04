"use client";

interface Props {
  value: number; // 0-100
  className?: string;
}

export default function ProgressBar({ value, className = "" }: Props) {
  return (
    <div className={`overflow-hidden rounded-full bg-gray-100 ${className}`}>
      <div
        className="h-full rounded-full bg-emerald-500 transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
