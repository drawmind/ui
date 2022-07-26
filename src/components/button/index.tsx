import React, { FC, useEffect, useState } from "react";
import { CommonProps, SizeProps, classPrefix } from "../common";
import "./index.scss";

export interface ButtonProps extends CommonProps, SizeProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    height?: number;
    width?: number;
    disabled?: boolean;
    style?: React.CSSProperties;
}

const Button: FC<React.PropsWithChildren<ButtonProps>> = ({
    height,
    width,
    style = {},
    children,
    className,
    disabled = false,
    size = "md",
    onClick
}) => {
    const [btnClass, setBtnClass] = useState<string>();

    useEffect(() => {
        if (className) {
            setBtnClass(`${size}-${classPrefix}-button ${className}`);
        } else {
            setBtnClass(`${size}-${classPrefix}-button`);
        }
    }, [className, size]);

    return (
        <button
            disabled={disabled}
            className={btnClass}
            style={{
                ...style,
                width,
                height
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
