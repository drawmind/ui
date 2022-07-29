import React from "react";
import Button from "../components/button";

const ButtonExample = () => {
    return (
        <div className="example button-example">
            <h2 className="example-title">Button</h2>
            <div className="example-body button-exmple-content">
                <Button size="xs" onClick={() => alert("xs button")}>Mind Draw</Button>
                <Button size="sm" onClick={() => alert("sm button")}>Mind Draw</Button>
                <Button size="md" onClick={() => alert("md button")}>Mind Draw</Button>
                <Button size="lg" onClick={() => alert("md button")} disabled>Mind Draw</Button>
            </div>
        </div>
    );
};

export default ButtonExample;
