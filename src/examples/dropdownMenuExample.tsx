import React from "react";
import DropdownMenu from "../components/dropdownMenu";

const DropdownMenuExample = () => {
    return (
        <div className="example">
            <h2 className="example-title">DropdownMenu</h2>
            <div className="example-body">
                <DropdownMenu
                    items={[
                        {
                            value: "1",
                            text: "天龙八部"
                        },
                        {
                            value: "2",
                            text: "笑傲江湖"
                        },
                        {
                            value: "3",
                            text: "神雕侠侣"
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default DropdownMenuExample;
