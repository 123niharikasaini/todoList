import React, { useState } from "react";
import Items from "./Items";


const Main = () => {

    const [content, setContent] = useState("");
    // const [style, setStyle]=useState("container")
// array to store all
    const [items,setItems]=useState([]);

    const change = (obj) => {
        setContent(obj.target.value);
    };

    const listofItem=()=>{
        // oldItems gives the prev array stored in Items
        setItems((oldItems)=>{
            // can extend the height
            // if((oldItems.length+1)%5==0){
            //     console.log(oldItems.length);
            //     console.log(oldItems.length%5);
            //     setStyle("container extend");
            // }

            // if (content==""){return alert("Write Here")}

            // using spread operator we join the previous content with current
            return [...oldItems,content];
            
        });
        setContent("");
    };

    const deleteItem=(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                // arrElem,index ==>> current element and its index
                return index!=id;
                // return false for all index which has not to be deleted
            });
        });
    };

    return (<>
        <div className="container">
            <br />
            <h1>To Do List</h1>
            <hr />
            <br />
            
                <div className="field">
                    <input type="text" className="enter" name="content" placeholder="Write Here" value={content} onChange={change}/>
                    <button type="submit" className="add" onClick={listofItem}>+</button>
                </div>
            
            <ul className="Mainlist">

                {
                items.map((val,i)=>{
                    
                    return(<Items text={val}
                        key={i}
                        // passing the index
                        idx={i}
                        onSelect={deleteItem}
                    />)
                })}
            </ul>
        </div>
    </>);
}

export default Main;