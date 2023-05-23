function Contact(props) {
  const handlerDeleteContact = (index) => {
    // le paso el objecto de contactos y la funcion por props para poder llamarlo aqui
    const clonedArr = JSON.parse(JSON.stringify(props.allContacts));
    clonedArr.splice(index, 1);
    props.setContact(clonedArr);
  };

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
      <td>{props.contact.wonOscar && "🏆"}</td>
      <td>{props.contact.wonEmmy && "🏆"}</td>
      <td>
        <button
          onClick={() => {
            handlerDeleteContact(props.index);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Contact;
