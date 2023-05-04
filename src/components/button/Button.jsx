import React from 'react';

const Button = ({ onClick, className, children, type = "button", bgColor = "primary" }) => {
    let bgClassName = 'bg-primary';
    switch (bgColor) {
        case 'primary':
            bgClassName = "bg-primary";
            break;
        case 'secondary':
            bgClassName = "bg-secondary";
            break;
        default:
            break;
    }
    
    return (
        <button
            type={type}
            onClick={onClick}
            className={`py-3 px-5 rounded-lg capitalize ${bgClassName} text-base tracking-wide w-full hover:bg-pink-400 transition-all duration-100 mt-auto ${className}`}>
            {children}
        </button>
    );
};

export default Button;