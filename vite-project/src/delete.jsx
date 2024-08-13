import React, { useState } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<Delete />, document.getElementById('app'));

function Delete() {

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
    const handleDelete = (event) => {
        event.preventDefault();
        fetch(BASE_URL + encodeURIComponent(event.target.elements.id.value), {method: 'DELETE'})
        
    }
    
    return (
    <>
    <form onSubmit={handleSearch} className="search">
        <img src="../src/search-icon.png" alt="search" className="search-icon"/><input type="text" className="search-bar" id="search"/>
    <table className="contacts">
            <tbody>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Number</td>
                </tr>
                {contacts.map((contact, i) => {
                    
                        return(<tr className="contact">
                                    <td>{contact.id}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.number}</td>
                                </tr>
                            
                        )})}
            </tbody>
        </table>
        <div className="container">
            <button className="edit-buttons" type="submit">Search</button>
        </div>
    </form>
    <form onSubmit={handleDelete}>
        <div>
            <label htmlFor="id" className="labels">ID</label><br />
            <input type="text" id="id" name="id" className="edit-inputs"/>
        </div>
        <div className="container">
            <button className="new-buttons">Delete</button>
        </div>
    </form>
    </>
    )
}