"use client";

import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
  text?: string;
  href?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline";
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export default function Button({
  text,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  children,
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 w-fit h-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles: Record<string, string> = {
    primary: "bg-primary-100 text-bgwhite-100 hover:bg-secondary-100",
    outline:
      "border-2 border-primary-100 text-primary-100 hover:border-secondary-100",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {text && <span className="font-primary">{text}</span>}
      {children}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
