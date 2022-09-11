import React from "react";

import style from "../style/horizonalSelect.scss";

const HorizonalSelect: React.FC<horizonalSelectPropsType> = (props) => {
    const [value, setValue] = React.useState<any>(props.value.value);
    const [label, setLabel] = React.useState<React.ReactNode>(props.value.label);
    const [index, setIndex] = React.useState<number>(props.contents.findIndex(c => c == props.value) || 0);

    //when < or > button clicked,index is changed.after,value will be changed
    React.useEffect(() => {
        const value = props.contents[index].value;
        const label = props.contents[index].label;
        setValue(value);
        setLabel(label);
        if (props.onChange) props.onChange({ value, label });

    }, [index])

    function handleClick(num: number) {
        let value = index;
        value += num;
        if (value < 0) value = props.contents.length - 1;
        else if (value > props.contents.length - 1) value = 0;

        setIndex(value);
    }

    //svg from material icons(Navigate Before,Navigate Next)
    const BackArrow = () => <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" /></svg>
    const ForwardArrow = () => <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" /></svg>

    return (
        <div className={`${style.horizonalSelect} ${props.className || ""}`}>
            <div className={style.arrowBtn} onClick={() => handleClick(-1)}>
                <BackArrow />
            </div>
            <div className={style.label}>
                <span>{label}</span>
                <div className={style.indexPoint}>
                    {
                        props.contents.map((value, indexNum) => {
                            return (
                                //if indexNum == index,this will be blue.
                                <div key={indexNum} data-index={String(Boolean(indexNum == index))}></div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={style.arrowBtn} onClick={() => handleClick(1)}>
                <ForwardArrow />
            </div>
        </div>
    )
}

export default HorizonalSelect;