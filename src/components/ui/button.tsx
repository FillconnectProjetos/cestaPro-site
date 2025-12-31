import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const variants = {
            primary: 'bg-brand text-white hover:bg-brand-dark shadow-md hover:shadow-lg active:scale-[0.98]',
            secondary: 'bg-graphite text-white hover:bg-graphite-light shadow-md hover:shadow-lg active:scale-[0.98]',
            outline: 'border-2 border-graphite text-graphite hover:bg-neutral-100 active:scale-[0.98]',
            ghost: 'text-neutral-600 hover:text-brand-dark hover:bg-brand-light/20',
        };

        const sizes = {
            sm: 'h-9 px-4 text-sm font-medium',
            md: 'h-11 px-6 text-base font-medium',
            lg: 'h-14 px-8 text-lg font-bold',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-lg transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none tracking-wide',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);
