
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = 'button',
    ...props
}, ref) => (
    <button
        ref={ref}
        disabled={disabled}
        { ...props }
        className={twMerge(`
            px-4
            py-1
            hover:bg-gray-100
            rounded-md
            text-gray-400
            transition
            cursor-pointer
            flex
            items-baseline
        `, className
        )}
    >
        { children }
    </button>
))

Button.displayName = 'Button'

export default Button