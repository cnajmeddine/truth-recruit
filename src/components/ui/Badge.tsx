import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'danger' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'secondary', size = 'md', className, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center font-medium rounded-full border';
    
    const variantClasses = {
      success: 'bg-success-50 text-success-700 border-success-200',
      warning: 'bg-warning-50 text-warning-700 border-warning-200',
      danger: 'bg-danger-50 text-danger-700 border-danger-200',
      primary: 'bg-primary-50 text-primary-700 border-primary-200',
      secondary: 'bg-gray-50 text-gray-700 border-gray-200',
    };

    const sizeClasses = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-2 text-base',
    };

    return (
      <span
        ref={ref}
        className={clsx(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';