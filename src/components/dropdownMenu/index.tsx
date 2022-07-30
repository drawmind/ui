import React, { FC, useEffect, useState } from "react";
import BaseDropDownMenu, { BaseDropDownMenuProps } from "./baseDropdownMenu";
import MenuPanel from "../menuPanel";
import "./index.scss";

type MenuItemValue = string;
interface MenuItem {
    text: string;
    value: MenuItemValue;
}

interface MenuProps extends Pick<BaseDropDownMenuProps, "position"> {
    items: MenuItem[];
    onChange?: (value: MenuItemValue, index?: number, text?: string) => void;
    defaultValue?: string;
}

const NULL_ITEM: MenuItem = {
    text: "select",
    value: "NULL_MENU_ITEM"
};

const DropdownMenu: FC<MenuProps> = ({
    items,
    defaultValue,
    position="bottom-left",
    onChange
}) => {
    const [selected, setSelected] = useState<MenuItem>(NULL_ITEM);

    useEffect(() => {
        let initialValue = NULL_ITEM;
        if (defaultValue) {
            const defaultMenuItem = getMenuItem(defaultValue);
            if (defaultMenuItem) {
                initialValue = defaultMenuItem;
            }
        }
        setSelected(initialValue);
    }, []);

    const getMenuItem = (value: string) => {
        const item = items.find((item) => item.value === value)
        if (!item) {
            
        }

        return item;
    };

    const dropdown = (
        <MenuPanel
            groups={[
                {
                    id: "1",
                    items: items.map((item, index) => ({
                        id: item.value,
                        text: item.text,
                        onClick: () => {
                            setSelected(item);
                            if (onChange) {
                                onChange(item.value, index, item.text);
                            }
                        }
                    }))
                }
            ]}
        />
    );


    return (
        <div className="drop-down-menu">
            <BaseDropDownMenu
                value={selected.text}
                dropdown={dropdown}
                position={position}
            />
        </div>
    )
};

export default DropdownMenu;
