import React from "react";
import Button from "./components/button";
import "./App.scss";

const App = () => {
    return (
        <>
            <div>
                <div className="button-example">
                    <h2>Button</h2>
                    <div className="button-exmple-content">
                        <Button size="xs" onClick={() => alert("xs button")}>Mind Draw</Button>
                        <Button size="sm" onClick={() => alert("sm button")}>Mind Draw</Button>
                        <Button size="md" onClick={() => alert("md button")}>Mind Draw</Button>
                        <Button size="lg" disabled>Mind Draw</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
