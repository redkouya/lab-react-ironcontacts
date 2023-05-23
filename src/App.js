import "./App.css";
import Contact from "./components/Contact";
import allContacts from "./contacts.json";
import { useState } from "react";
function App() {
  const sliceArray = allContacts.slice(0, 5);
  const [contacts, setContact] = useState(sliceArray);

  const handlerAddContact = () => {
    const randomNumber = Math.floor(Math.random() * allContacts.length);
    setContact([...contacts,allContacts[randomNumber]]);
  };
 
  const handlerSortPopularity=()=>{
    setContact([...contacts].sort((a,b) =>a.popularity-b.popularity))
  }
  const handlerSortName=()=>{
    setContact([...contacts].sort((a,b) =>a.name.localeCompare(b.name)))
  }

  return (
    <div className="App">
      <button onClick={handlerAddContact}>Add Random Contact</button>
      <button onClick={handlerSortPopularity}>Sort by Popularity</button>
      <button onClick={handlerSortName}>Sort by Name</button>
      {
        <table>
        <thead>
          <tr >
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {contacts.map((eachContact,index) => {
            return <Contact contact={eachContact} index={index} allContacts={contacts}  setContact={setContact}/ >;
          })}
          </tbody>
        </table>
      }
    </div>
  );
}

export default App;
