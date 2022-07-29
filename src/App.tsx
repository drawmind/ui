import React from "react";
import "./App.scss";
import Button from "./components/button";
import Input from "./components/input";
import NumberInput from "./components/numberInput";
import {H1, H2, H3, H4, H5, H6} from "./components/header";
import MenuPanelExample from "./examples/menuPanelExample";

const App = () => {
    return (
        <>
            <div>
                <div className="example button-example">
                    <h2 className="example-title">Button</h2>
                    <div className="example-body button-exmple-content">
                        <Button size="xs" onClick={() => alert("xs button")}>Mind Draw</Button>
                        <Button size="sm" onClick={() => alert("sm button")}>Mind Draw</Button>
                        <Button size="md" onClick={() => alert("md button")}>Mind Draw</Button>
                        <Button size="lg" onClick={() => alert("md button")} disabled>Mind Draw</Button>
                    </div>
                </div>
                <div className="example input-example">
                    <h2 className="example-title">Input</h2>
                    <div className="example-body input-example-content">
                        <Input size="xs" placeholder="input some words..."/>
                        <Input size="sm" />
                        <Input size="md" />
                        <Input size="lg" disabled />
                    </div>
                </div>
                <div className="example number-input-example">
                    <h2 className="example-title">NumberInput</h2>
                    <div className="example-body number-input-example-content">
                        <NumberInput size="xs" placeholder="input some words..."/>
                        <NumberInput size="sm" />
                        <NumberInput size="md" />
                        <NumberInput size="lg" disabled />
                    </div>
                </div>
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
                <MenuPanelExample />
            </div>
        </>
    );
};

export default App;
