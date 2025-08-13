import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'large';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    label, 
    error, 
    helpText, 
    leftIcon, 
    rightIcon, 
    variant = 'default',
    className, 
    id,
    ...props 
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    
    const baseClasses = 'w-full border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 placeholder:text-gray-400';
    
    const variantClasses = {
      default: 'px-4 py-3 text-base',
      large: 'px-6 py-4 text-lg',
    };

    const stateClasses = error
      ? 'border-danger-300 focus:ring-danger-500 focus:border-danger-500'
      : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500';

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId} 
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            className={clsx(
              baseClasses,
              variantClasses[variant],
              stateClasses,
              leftIcon && 'pl-12',
              rightIcon && 'pr-12',
              className
            )}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p className="mt-2 text-sm text-danger-600">
            {error}
          </p>
        )}
        
        {helpText && !error && (
          <p className="mt-2 text-sm text-gray-500">
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';