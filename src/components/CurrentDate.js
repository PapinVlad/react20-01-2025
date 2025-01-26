import React from "react";

const CurrentDate = () =>{
    const curDate = new Date();
    const date = `${curDate.getDate()}/${curDate.getMonth()+1}/${curDate.getFullYear()}`
    return(
        <>
        <div>
            <h1>Current data is {date}</h1>
        </div>
        </>
    )
}

export default CurrentDate;