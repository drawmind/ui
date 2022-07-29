import React, { useState, useEffect, FC, useCallback } from "react";
import { classPrefix, SizeProps} from "../common";

interface MenuItemClickFun {
    (key: React.Key, text: string): void;
}

export interface MenuItemProps extends SizeProps, Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> {
    key: React.Key;
    text: string;
    selected?: boolean;
    selectedColor?: string;
    onClick?: MenuItemClickFun;
}

const MenuItem: FC<MenuItemProps> = ({
    key,
    text,
    selected = false,
    selectedColor,
    onClick,
    size="md",
    ...props
}) => {
    const [menuItemClass, setMenuItemClass] = useState<string>();

    useEffect(() => {
        setMenuItemClass(`md-menu-item ${size}-${classPrefix}-menu-item`);
    }, [size]);

    const style = selected && selectedColor ? {...props.style, color: selectedColor} : props.style; 

    const clickHandle = useCallback(() => {
        if (onClick) {
            onClick(key, text);
        }
    }, [onClick]);

    return (
        <div
            key={key}
            className={menuItemClass}
            {...props}
            style={style}
            onClick={clickHandle}
        >
            {text}
        </div>
    );
};

export default MenuItem;
