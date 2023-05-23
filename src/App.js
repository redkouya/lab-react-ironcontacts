import "./App.css";
import allContacts from "./contacts.json";
import { useState } from "react";
import Contact from "./components/Contact";
function App() {
  const sliceArray = allContacts.slice(0, 5);
  const [contacts, setContact] = useState(sliceArray);

  const handlerAddContact = () => {
    const randomNumber = Math.floor(Math.random() * allContacts.length);
    setContact([...contacts, allContacts[randomNumber]]);
  };

  const handlerSortPopularity = () => {
    setContact([...contacts].sort((a, b) => a.popularity - b.popularity));
  };
  const handlerSortName = () => {
    setContact([...contacts].sort((a, b) => a.name.localeCompare(b.name)));
  };
  const handlerDeleteContact = (index) => {
    // le paso el objecto de contactos y la funcion por props para poder llamarlo aqui
    const clonedArr = JSON.parse(JSON.stringify(contacts));
    clonedArr.splice(index, 1);
    console.log(clonedArr);
    setContact(clonedArr);
  };


  return (
    <div className="App">
    <div class="buttons">
      <button class="addContact-btn" onClick={handlerAddContact}>Add Random Contact</button>
      <button class="sortContactsPop-btn" onClick={handlerSortPopularity}>Sort by Popularity</button>
      <button class="sortContactsName-btn" onClick={handlerSortName}>Sort by Name</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody >
        {contacts.map((eachElement, index) => {
          return (
           
            <tr key={eachElement.id}>
                <td>
                  <img
                    width="75px"
                    src={eachElement.pictureUrl}
                    alt={eachElement.name}
                  />
                </td>
                <td width="150px">{eachElement.name}</td>
                <td>{eachElement.popularity.toFixed(2)}</td>
                <td>{eachElement.wonOscar && "🏆"}</td>
                <td>{eachElement.wonEmmy && "🏆"}</td>
                <td>
                  <button
                    onClick={() => {
                      handlerDeleteContact(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr> 


              
          
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
