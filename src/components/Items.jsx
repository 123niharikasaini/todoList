import React from "react";

const Items=(props)=>{
    return(
        <><div className="list">
        <li><i className="fa-solid fa-x" onClick={()=>{
            // returning the index of current item that has to be deleted
            props.onSelect(props.idx)
        }}></i>{props.text}</li>
        </div>
        </>
    )
};

export default Items;