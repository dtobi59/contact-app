import AddContact from "./AddContact";
import Header from "./Header";
import ContactList from "./ContactList";

const contacts = [
  {
    id:"1",
    name:"David Olaboye",
    email:"dtobi59@gmail.com",
    created_at: "7388/4949/49494",
  },
  {
    id:"2",
    name: "Victor Olamide",
    email:"victor@gmail.com",
    created_at: "7388/4949/49494",
  },
  {
    id:"3",
    name: "Esther Mojisola",
    email:"esther56@gmail.com",
    created_at: "7388/4949/49494",
  },
];
function App() {
  return (
    <div className="App">
        <Header/>
        <AddContact/>
        <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
