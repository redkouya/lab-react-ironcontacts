function Contact(props) {
  


  return (
   
      <tr key={props.contact.id}>
        <td>
          <img
            width="75px"
            src={props.contact.pictureUrl}
            alt={props.contact.name}
          />
        </td>
        <td width="150px">{props.contact.name}</td>
        <td>{props.contact.popularity.toFixed(2)}</td>
        <td>{props.contact.wonOscar &&"🏆"}</td>
        <td>{props.contact.wonEmmy &&"🏆"}</td>
      </tr>
  
  );
}

export default Contact;
