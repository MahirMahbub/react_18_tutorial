import {ReactNode} from "react";

interface ButtonProps {
    children: ReactNode
    onClick: () => void;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

const Button = ({children, onClick, color='primary'}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className={`btn btn-${color}`}
        >
            {children}
        </button>);
}

export default Button;