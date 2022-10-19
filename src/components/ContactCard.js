import React from "react";

const ContactCard = (props) => {
    const{id,name,number,email} = props.contact;
    return(
        <div className="item">
        <div className="content">
            <div>{name}</div>
            <div>{number}</div>
            <div>{email}</div>
            </div>
            <i onClick={() => props.clickHandler(id)}>Delete</i>
            <hr></hr>
    </div>
    )
};

export default ContactCard;