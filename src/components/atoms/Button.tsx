import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    onClick,
    type = "button",
    disabled = false,
    ...props
}: ButtonProps) => {
    const variants = {
        primary: 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30',
        secondary: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20',
        outline: 'border-2 border-orange-500 text-orange-600 hover:bg-orange-50',
        ghost: 'text-stone-600 hover:bg-orange-100/50',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-xl font-black',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.9, rotate: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={cn(
                'rounded-2xl transition-colors duration-200 font-bold cursor-pointer flex items-center justify-center gap-2',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};
