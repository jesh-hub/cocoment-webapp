import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm';
  weight?: 'medium' | 'semibold';
  fullWidth?: boolean;
}

const Button = ({
  type = 'button',
  variant = 'primary',
  size = 'sm',
  weight = 'medium',
  fullWidth = false,
  children,
  onClick,
}: ButtonProps) => {
  const THEME = {
    primary:
      'bg-ccmt-neutral-300 text-white hover:bg-ccmt-neutral-300/90 focus-visible:outline-ccmt-neutral-400',
    secondary:
      'bg-white text-gray-900 shadow-black/5 ring-1 ring-inset ring-gray-300 ring-offset-0 focus-visible:outline-gray-300 hover:bg-gray-50',
  }[variant];
  const SIZE = {
    sm: 'px-3 py-2 text-sm leading-6',
  }[size];

  return (
    <button
      type={type}
      className={`${
        fullWidth ? 'flex w-full' : 'inline-flex'
      } justify-center rounded-md shadow-sm font-${weight} ${THEME} ${SIZE} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
