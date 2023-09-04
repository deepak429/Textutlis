import React from "react";

export default function Alert(props) {
    const cap = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    const alt = {
        height:"50px",
        animationDelay: "2s"
    }
    return(
        <>
        <div style={alt}>
         {props.alert && <div className="alert alert-success d-flex align-items-center" role="alert" id="alerts">
                <div>
                   <strong>{cap(props.alert.type)}:</strong> {props.alert.msg}
                </div>
            </div>}
            </div>
        </>

    )

}
