import React, { FC, useEffect, useState } from "react";
import { CommonProps, SizeProps, classPrefix } from "../common";
import "./index.scss";

export interface InputProps extends CommonProps, SizeProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    htmlSize?: number;
}

const Input: FC<InputProps>= ({
    className,
    size="md",
    htmlSize,
    ...props
}) => {
    const [inputClass, setInputClass] = useState<string>();
    
    useEffect(() => {
        if (className) {
            setInputClass(`${size}-${classPrefix}-input ${className}`);
        } else {
            setInputClass(`${size}-${classPrefix}-input`);
        }
    }, [className, size]);

    return (
        <input
            className={inputClass}
            size={htmlSize}
            {...props}
        />
    );
};

export default Input;
