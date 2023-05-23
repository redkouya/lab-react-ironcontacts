import "./App.css";
import Contact from "./components/Contact";
import contacts from "./contacts.json";
function App() {
  const sliceArray = contacts.slice(0, 5);
  return (
    <div className="App">
      {
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
          {sliceArray.map((eachContact) => {
            return <Contact contact={eachContact} />;
          })}
        </table>
      }
    </div>
  );
}

export default App;
