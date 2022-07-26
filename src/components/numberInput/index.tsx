import Input, {InputProps} from "../input";
import React, { FC } from "react";

type NumberInputProps = Omit<InputProps, "type">;

const NumberInput: FC<NumberInputProps> = (props) => {
    return (
        <Input
            type="number"
            {...props}
        />
    )
};

export default NumberInput;
