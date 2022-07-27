import React, { FC, useEffect, useState } from "react";
import { SizeProps, classPrefix } from "../common";
import "./index.scss";

export interface ButtonProps extends SizeProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    height?: number;
    width?: number;
}

const Button: FC<React.PropsWithChildren<ButtonProps>> = ({
    height,
    width,
    children,
    className,
    size = "md",
    style={},
    ...props
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
            className={btnClass}
            style={{
                ...style,
                width,
                height
            }}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
