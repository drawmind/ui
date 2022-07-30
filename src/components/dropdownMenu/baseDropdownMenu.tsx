import React, { CSSProperties, FC, useEffect, useRef, useState } from "react";
import Button from "../button";
import "./baseDropdownMenu.scss";

export interface BaseDropDownMenuProps {
    value: React.ReactNode;
    dropdown: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right"
    | "top-left" | "top-right"
    | "bottom-left" | "bottom-right"
    | "left-top" | "left-bottom"
    | "right-top" | "right-bottom";
}

const BaseDropDownMenu: FC<BaseDropDownMenuProps> = ({value, dropdown, position="bottom"}) => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [dropdownStyle, setDropDownStyle] = useState<CSSProperties>({});
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const winClickHandle = (event: MouseEvent) => {
            setShowDropdown((show) => {
                if (event.target === menuButtonRef.current) {
                    return !show;
                }

                return false;
            });
        };
        window.addEventListener("click", winClickHandle);

        return () => {
            window.removeEventListener("click", winClickHandle);
        };
    }, [menuButtonRef]);

    useEffect(() => {
        if (showDropdown) {
            const menubutton = menuButtonRef.current;
            const dropdown = dropdownRef.current;
            if (menubutton && dropdown) {
                const style: CSSProperties = {};

                switch (position) {
                    case "bottom":
                        style.bottom = "-10px";
                        style.left="50%";
                        style.transform = "translate(-50%, 100%)";
                        break;
                    case "bottom-left":
                        style.bottom = "-10px";
                        style.left="0";
                        style.transform = "translate(0, 100%)";
                        break;
                    case "bottom-right":
                        style.bottom = "-10px";
                        style.right="0";
                        style.transform = "translate(0, 100%)";
                        break;
                    case "left":
                        break;
                    case "left-bottom":
                        break;
                    case "left-top":
                        break;
                    case "right":
                        break;
                    case "right-bottom":
                        break;
                    case "right-top":
                        break;
                    case "top":
                        break;
                    case "top-left":
                        break;
                    case "top-right":
                        break;
                    default:
                        break;
                }
                setDropDownStyle(style);
            }
        }
    }, [position, showDropdown]);

    return (
        <div className="base-drop-down-menu">
            <Button
                buttonRef={menuButtonRef}
                className="base-drop-down-menu-button"
            >
                {value}
            </Button>
            {
                showDropdown ? (
                    <div
                        ref={dropdownRef}
                        className={`base-drop-down-content ${position}-base-drop-down-content`}
                        style={dropdownStyle}
                    >
                        {dropdown}
                    </div>
                ) : null
            }
        </div>
    );
};

export default BaseDropDownMenu;
