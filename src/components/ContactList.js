import React from "react";
import ContactCard from "./ContactCard"

const ContactList = (props) => {

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

    const renderContactList = props.contacts.map((contact) => {
        return (
      
            <ContactCard 
            key={contact.id}
            contact={contact}
            deleteHandler = {deleteConactHandler}
            />
      
        );
     });
    return (

<div className="container mx-auto px-4 sm:px-8 max-w-3xl">
    <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                ID
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Name
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Email
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Created At
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                              Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderContactList}                        
                    </tbody>
                </table>
 
            </div>
        </div>
    </div>
</div>

    );
  }
  
  export default ContactList;