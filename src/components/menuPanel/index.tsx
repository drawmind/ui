import React, { useState, useEffect, FC } from "react";
import { classPrefix, SizeProps} from "../common";
import MenuItem, {MenuItemProps} from "./menuItem";
import "./index.scss";

export interface MenuPanelGroup extends React.HTMLAttributes<HTMLDivElement> {
    key: string;
    title: string;
    items: Omit<MenuItemProps, "size">[];
}

export interface MenuPanelProps extends SizeProps, React.HTMLAttributes<HTMLDivElement>{
    groups: MenuPanelGroup[];
    direction?: "vertical" | "horizontal";
}

const MenuPanel: FC<MenuPanelProps> = ({
    size = "md",
    direction="horizontal",
    groups,
    className,
    ...props
}) => {
    const [menuPanelClass, setMenuPanelClass] = useState<string>();

    useEffect(() => {
        if (className) {
            setMenuPanelClass(`${className} ${direction}-${classPrefix}-menu-panel md-menu-panel ${size}-${classPrefix}-menu-panel`)
        } else {
            setMenuPanelClass(`md-menu-panel ${direction}-${classPrefix}-menu-panel ${size}-${classPrefix}-menu-panel`);
        }
    }, [size, className, direction]);

    return (
        <div
            {...props}
            className={menuPanelClass}
        >
            {
                groups.map((group) => (
                    <div
                        key={group.key}
                        className={`menu-group ${classPrefix}-menu-group`}
                    >
                        <div className={`menu-group-title ${classPrefix}-menu-group-title`}>
                            {group.title}
                        </div>
                        <div className={`menu-group-content ${classPrefix}-menu-group-content`}>
                            {
                                group.items.map(({
                                    key,
                                    text,
                                    selected,
                                    selectedColor,
                                    onClick,
                                    ...props
                                }) => (
                                    <MenuItem
                                        key={key}
                                        text={text}
                                        selected={selected}
                                        selectedColor={selectedColor}
                                        onClick={onClick}
                                        size={size}
                                        {...props}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MenuPanel;
