import React, {FC, PropsWithChildren, useEffect, useState} from "react";
import { classPrefix } from "../common";


export type HeaderProps = React.HTMLAttributes<HTMLHeadingElement>;

const H1: FC<PropsWithChildren<HeaderProps>> = ({children, ...props}) => (
    <h1
        className={props.className ? `${props.className} ${classPrefix}-h1` : `${classPrefix}-h1`}
        {...props}
    >
        {children}
    </h1>
);

const H2: FC<PropsWithChildren<HeaderProps>> = ({children, ...props}) => (
    <h2
        className={props.className ? `${props.className} ${classPrefix}-h2` : `${classPrefix}-h2`}
        {...props}
    >
        {children}
    </h2>
);

const H3: FC<PropsWithChildren<HeaderProps>> = ({children, ...props}) => (
    <h3
        className={props.className ? `${props.className} ${classPrefix}-h3` : `${classPrefix}-h3`}
        {...props}
    >
        {children}
    </h3>
);

const H4: FC<PropsWithChildren<HeaderProps>> = ({children, ...props}) => (
    <h4
        className={props.className ? `${props.className} ${classPrefix}-h4` : `${classPrefix}-h4`}
        {...props}
    >
        {children}
    </h4>
);

const H5: FC<PropsWithChildren<HeaderProps>> = ({children, ...props}) => (
    <h5
        className={props.className ? `${props.className} ${classPrefix}-h5` : `${classPrefix}-h5`}
        {...props}
    >
        {children}
    </h5>
);

const H6: FC<PropsWithChildren<HeaderProps>> = ({children, ...props}) => (
    <h6
        className={props.className ? `${props.className} ${classPrefix}-h6` : `${classPrefix}-h6`}
        {...props}
    >
        {children}
    </h6>
);

export {H1, H2, H3, H4, H5, H6};
