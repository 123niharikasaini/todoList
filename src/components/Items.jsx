import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const Items=(props)=>{
    const [line,setLine]=useState(false);
    const cutIt=()=>{
        setLine(true)
    };

    return(
        <><div className="list">
        
           <span className="delete" onClick={cutIt}> <DeleteIcon 
            // onClick={()=>{
            // returning the index of current item that has to be deleted
            // props.onSelect(props.idx)
        // }}
        />
        </span>
        {/* teranry operator used for inline style */}
        <div style={{textDecoration: line ? "line-through":"none"}}>{props.text}</div>
        </div>
        </>
    )
};

export default Items;