import React from "react";
import style from "src/style/chamferedButton.scss";
const ChamferedButton = (props) => {
    const chamferedButtonRef = React.useRef(null);
    //if there is custom accent color,set lisner to override color
    React.useEffect(() => {
        if (!chamferedButtonRef.current || !props.accentColor)
            return;
        chamferedButtonRef.current.addEventListener("mouseenter", () => setHoverAction(true));
        chamferedButtonRef.current.addEventListener("mouseleave", () => setHoverAction(false));
        return () => {
            if (!chamferedButtonRef.current)
                return;
            chamferedButtonRef.current.removeEventListener("mouseenter", () => setHoverAction(true));
            chamferedButtonRef.current.removeEventListener("mouseleave", () => setHoverAction(false));
        };
    }, []);
    function setHoverAction(active) {
        if (!chamferedButtonRef.current || !props.accentColor)
            return;
        if (active)
            chamferedButtonRef.current.style.backgroundColor = props.accentColor;
        else
            chamferedButtonRef.current.style.backgroundColor = "";
    }
    return (React.createElement("button", { onClick: props.onClick, className: `${style.chamferedbutton} ${props.className || ""}`, ref: chamferedButtonRef }, props.children));
};
export default ChamferedButton;
