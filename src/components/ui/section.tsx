import React from 'react';
import { cn } from './button'; // reusing cn

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    containerClassName?: string;
    children: React.ReactNode;
    id?: string;
}

export const Section = ({ className, containerClassName, children, id, ...props }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn('py-16 md:py-24', className)}
            {...props}
        >
            <div className={cn('container mx-auto px-4 md:px-6', containerClassName)}>
                {children}
            </div>
        </section>
    );
};
