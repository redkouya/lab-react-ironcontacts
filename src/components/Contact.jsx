function Contact(props) {
  


  return (
    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
      <tr>
        <td>
          <img
            width="75px"
            src={props.contact.pictureUrl}
            alt={props.contact.name}
          />
        </td>
        <td width="150px">{props.contact.name}</td>
        <td>{props.contact.popularity.toFixed(2)}</td>
      </tr>
    </table>
  );
}

export default Contact;
