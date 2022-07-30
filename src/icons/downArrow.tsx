import React, { FC } from "react";
import { IconProps, defualtWidth, defaultHeight, defaultFill, defaultStroke } from "./index";

const DownArrow: FC<IconProps> = ({
    height = defaultHeight,
    width = defualtWidth,
    fill = defaultFill,
    stroke = defaultStroke
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M36 19L24 31L12 19H36Z"
                fill={fill}
                stroke={stroke}
                stroke-width="4"
                stroke-linejoin="round"
            />
        </svg>
    )
};

export default DownArrow;
