import React from "react";

import style from "../style/rangeInput.scss";


const RangeInput: React.FC<rangeInputPropsType> = (props) => {

    const [value, setValue] = React.useState(props.value || 50);

    function handleChange(value: number) {
        if (value) {
            setValue(Number(value));
            if (props.onChange)
                props.onChange(value)
        }
    }
    return (
        <div  className={`${style.rangeinput_wrapper} ${style[props.size||"large"]} ${props.className || ""}`}>
            <input type="range" className={style.rangeinput} min={props.min || 0} max={props.max || 100} step={props.step || 1} value={value} onChange={(e) => { handleChange(Number(e.target.value)) }} />
            <input type="number" className={style.rangeinput_number} min={props.min || 0} max={props.max || 100} step={props.step || 1} value={value} onChange={(e) => { handleChange(Number(e.target.value)) }} />
        </ div>
    )
}

export default RangeInput;