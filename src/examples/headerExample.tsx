import React from "react";
import {H1, H2, H3, H4, H5, H6} from "../components/header";

const HeaderExample = () => {
    return (
        <div className="example header-example">
        <h2 className="example-title">Header</h2>
        <div className="example-body header-input-example-content">
            <H1 style={{color: "red"}}>Header One</H1>
            <H2>Header Two</H2>
            <H3>Header Three</H3>
            <H4>Header Four</H4>
            <H5>Header Five</H5>
            <H6>Header Six</H6>
        </div>
    </div>
    );
};

export default HeaderExample;
