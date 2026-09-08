import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface LiquidButtonProps {
  children: React.ReactNode;
  variant?: 'glass' | 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit';
}

export default function LiquidButton({
  children,
  variant = 'glass',
  size = 'md',
  icon,
  iconPosition = 'right',
  onClick,
  href,
  className = '',
  type = 'button'
}: LiquidButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-sans font-medium transition-colors gap-2';
  
  const variants = {
    glass: 'liquid-glass text-white hover:bg-white/10',
    solid: 'bg-white text-black hover:bg-white/90',
    outline: 'border border-white/20 text-white hover:bg-white/10'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link to={href}>
        <motion.button
          type={type}
          onClick={onClick}
          className={classes}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {content}
        </motion.button>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}
