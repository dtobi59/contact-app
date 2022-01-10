import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AddContact from "./AddContact";
import Header from "./Header";
import ContactList from "./ContactList";
import ContactDetails from './ContactDetails';

const { v4: uuidv4 } = require('uuid');


// const contacts = [
//   {
//     id:"1",
//     name:"David Olaboye",
//     email:"dtobi59@gmail.com",
//     created_at: "7388/4949/49494",
//   },
//   {
//     id:"2",
//     name: "Victor Olamide",
//     email:"victor@gmail.com",
//     created_at: "7388/4949/49494",
//   },
//   {
//     id:"3",
//     name: "Esther Mojisola",
//     email:"esther56@gmail.com",
//     created_at: "7388/4949/49494",
//   },
// ];

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const newContactHandler = (contact) =>{
    setContacts([...contacts,{id:uuidv4(),...contact}]);
  }

 const deleteContactHandler = (id) =>{
    console.log("Deleting item: "+id);

    //return all contacts except the deleted contact
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(() =>{
      const contacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if(contacts) setContacts(contacts)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts])

  return (
    <div className="App">
        <Router>
           <Header/>
          <Routes>
             <Route path="/" element = {<ContactList contacts={contacts} getContactId={deleteContactHandler}/>}/>
             <Route path="/add" element = {<AddContact newContactHandler = {newContactHandler}/>}/>
             <Route path="/contact/:id" element = {<ContactDetails />}/>

          </Routes>         
       
        </Router>

    </div>
  );
}

export default App;
