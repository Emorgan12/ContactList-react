import React, { useState } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<Edit />, document.getElementById('app'));

function Edit() {
    const [error, setError] = useState(null);
    const [contacts, setContacts] = useState([]);
    const BASE_URL = 'https://127.0.0.1:5000/items/';
    const handleSearch = (event) => {  
        event.preventDefault();
        const searchValue = event.target.elements.search.value;

        fetch(BASE_URL + 'searchName/' + encodeURIComponent(searchValue))
        .then((response) => response.json())
        .then((data) => setContacts(data))
        .catch((error) => {
            console.error('Error fetching data:', error);
            setError(error.message);
        });

    }

    const handleID = (event) => {
        event.preventDefault();
        const id = event.target.elements.id.value;

        fetch(BASE_URL + encodeURIComponent(id))
        .then((response) => response.json())
        .then((data) => setContacts(data))
        .catch((error) => {
            console.error('Error fetching data:', error);
            setError(error.message);
        });
    }    

    const handleChange = (event) => {
        event.preventDefault();
        const id = contacts.id;

        fetch(BASE_URL + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: event.target.elements.name.value,
                number: event.target.elements.number.value,
            }),
        })
    }
return (
    <>
    <form onSubmit={handleSearch}>
        <div>
            <label htmlFor="search" className="labels">Name</label><br />
            <input type="text" id="search" name="search" className="edit-inputs"/>
        </div>
        <table className="contacts">
            <tbody>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Number</td>
                </tr>
                {contacts.map((contact, i) => {
                    return (
                        <tr className="contact">
                            <td>{contact.id}</td>
                            <td>{contact.name}</td>
                            <td>{contact.number}</td>
                        </tr>
                    );
                })}
            </tbody>
            
        </table>
        <div className="container">
            <button className="edit-buttons" type="submit">Search</button>
        </div>
    </form>
    <div className="container" id= "contacts">
    </div>
    <form onSubmit={handleID}>
        <div>
            <label htmlFor="id" className="labels">ID</label><br />
            <input type="text" id="id" name="id" className="edit-inputs"/>
        </div>
        <div className="container">
            <button className="edit-buttons" type="submit">Edit</button>
        </div>
    </form>
    <form onSubmit={handleChange}>
        <div>
            <label htmlFor="name" className="labels" value={contacts.name}>New Name</label><br />
            <input type="text" id="name" name="name" className="edit-inputs"/>
        </div>
        <div>
            <label htmlFor="number" className="labels" value={contacts.number} >New Number</label><br />
            <input type="tel" id="number" name="number" className="edit-inputs"/>
        </div>
        <div className="container">
            <button className="edit-buttons" type="submit">Save</button>
        </div>
    </form>
    </>
)
}