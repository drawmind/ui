import React, { FC, Ref, useEffect, useState } from "react";
import { SizeProps, classPrefix } from "../common";
import "./index.scss";

export interface ButtonProps extends SizeProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    height?: number;
    width?: number;
    buttonRef?: Ref<HTMLButtonElement>;
}

const Button: FC<React.PropsWithChildren<ButtonProps>> = ({
    height,
    width,
    children,
    className,
    size = "md",
    style={},
    buttonRef,
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
            ref={buttonRef}
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
