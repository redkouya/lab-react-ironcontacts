import './App.css';
import Contact from './components/Contact';
import contacts from "./contacts.json";
function App() {
  const sliceArray=contacts.slice(0,5)
  return (
    <div className="App">
    {
      sliceArray.map((eachContact)=>
        <Contact contact={eachContact} />
      )
    }
      
    </div>
  );
}

export default App;
