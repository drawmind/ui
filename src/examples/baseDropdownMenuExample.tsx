import React from "react";
import Button from "../components/button";
import BaseDropdownMenu from "../components/dropdownMenu/baseDropdownMenu";

const BaseDropdownMenuExample = () => {
    return (
        <div className="example base-dropdown-menu-example">
            <h2 className="example-title">BaseDropdownMenu</h2>
            <div className="example-body">
                <BaseDropdownMenu
                    value="学科"
                    position="bottom-left"
                    dropdown={
                        <div style={{display: "flex", flexDirection: "column", rowGap: "10px", alignItems: "start"}}>
                            <Button>===语文===</Button>
                            <Button>===数学===</Button>
                            <Button>===英语===</Button>
                            <Button>===生物===</Button>
                            <Button>===物理===</Button>
                            <Button>===化学===</Button>
                        </div>
                    }  
                />
                <BaseDropdownMenu
                    value="学科"
                    position="bottom"
                    dropdown={
                        <div style={{display: "flex", flexDirection: "column", rowGap: "10px", alignItems: "start"}}>
                            <Button>===语文===</Button>
                            <Button>===数学===</Button>
                            <Button>===英语===</Button>
                            <Button>===生物===</Button>
                            <Button>===物理===</Button>
                            <Button>===化学===</Button>
                        </div>
                    }  
                />
                <BaseDropdownMenu
                    value="学科"
                    position="bottom-right"
                    dropdown={
                        <div style={{display: "flex", flexDirection: "column", rowGap: "10px", alignItems: "start"}}>
                            <Button>===语文===</Button>
                            <Button>===数学===</Button>
                            <Button>===英语===</Button>
                            <Button>===生物===</Button>
                            <Button>===物理===</Button>
                            <Button>===化学===</Button>
                        </div>
                    }  
                />
            </div>
        </div>
    );
};

export default BaseDropdownMenuExample;
