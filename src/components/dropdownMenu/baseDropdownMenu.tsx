import React, { CSSProperties, FC, useEffect, useRef, useState } from "react";
import Button from "../button";
import "./baseDropdownMenu.scss";
import { getElementOffsetToPageTop } from "../../util/domUtil";
import DownArrow from "../../icons/downArrow";

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
    const [mouseInButton, setMouseInBtn] = useState<boolean>(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const winClickHandle = () => {
            setShowDropdown((show) => {
                if (mouseInButton) {
                    return !show;
                }

                return false;
            });
        };
        window.addEventListener("click", winClickHandle);

        return () => {
            window.removeEventListener("click", winClickHandle);
        };
    }, [menuButtonRef, mouseInButton]);

    useEffect(() => {
        if (showDropdown) {
            const menubutton = menuButtonRef.current;
            const dropdown = dropdownRef.current;
            if (menubutton && dropdown) {
                const style: CSSProperties = {};
                const {height, width} = menubutton.getBoundingClientRect();
                const {top, left} = getElementOffsetToPageTop(menubutton);

                switch (position) {
                    case "bottom":
                        style.left = `${left + 0.5 * width}px`;
                        style.top = `${top + height + 10}px`;
                        style.transform = "translate(-50%, 0)";
                        break;
                    case "bottom-left":
                        style.top = `${top + height + 10}px`;
                        style.left = `${left}px`;
                        break;
                    case "bottom-right":
                        style.top = `${top + height + 10}px`;
                        style.left = `${left + width}px`;
                        style.transform = "translate(-100%, 0)";
                        break;
                    case "left":
                        style.top = `${top + 0.5 * height}px`;
                        style.left = `${left - 10}px`;
                        style.transform = "translate(-100%, -50%)";
                        break;
                    case "left-bottom":
                        style.top = `${top}px`;
                        style.left = `${left - 10}px`;
                        style.transform = "translate(-100%, 0)";
                        break;
                    case "left-top":
                        style.top = `${top + height}px`;
                        style.left = `${left - 10}px`;
                        style.transform = "translate(-100%, -100%)";
                        break;
                    case "right":
                        style.top = `${top + 0.5 * height}px`;
                        style.left = `${left + width + 10}px`;
                        style.transform = "translate(0, -50%)";
                        break;
                    case "right-bottom":
                        style.top = `${top}px`;
                        style.left = `${left + width + 10}px`;
                        break;
                    case "right-top":
                        style.top = `${top + height}px`;
                        style.left = `${left + width + 10}px`;
                        style.transform = "translate(0, -100%)";
                        break;
                    case "top":
                        style.top = `${top - 10}px`;
                        style.left = `${left + 0.5 * width}px`;
                        style.transform = "translate(-50%, -100%)";
                        break;
                    case "top-left":
                        style.top = `${top - 10}px`;
                        style.left = `${left}px`;
                        style.transform = "translate(0, -100%)";
                        break;
                    case "top-right":
                        style.top = `${top - 10}px`;
                        style.left = `${left + width}px`;
                        style.transform = "translate(-100%, -100%)";
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
                onMouseEnter={() => setMouseInBtn(true)}
                onMouseLeave={() => setMouseInBtn(false)}
            >
                {value}
                <DownArrow />
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
