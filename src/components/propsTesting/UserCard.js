import React from "react";

const UserCard = (props) => {


    return(
        <>
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
            <h3>Location: {props.location}</h3>
        </div>
        
        </>
    )
   
}

export default UserCard;