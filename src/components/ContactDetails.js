import React from "react";
import { Link, useLocation } from "react-router-dom";

const ContactDetails = (props) =>{
    const location = useLocation();

    //console.log(location);
    const contact = location.state.contact

    return(
        <div>
          ID: {contact.id} <br/>
          Name: {contact.name}  <br/>
          Email: {contact.email}
        </div>
    );

}

export default ContactDetails;