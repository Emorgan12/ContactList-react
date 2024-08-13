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
                {contacts.length == 1 ? contacts.map((contact, i) => {
                    
                        <tr className="contact">
                                    <td>{contact.id}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.number}</td>
                                </tr>
                            
                        }): 
                        <tr className="contact">
                            <td>{contacts.id}</td>
                            <td>{contacts.name}</td>
                            <td>{contacts.number}</td>
                        </tr>}
            </tbody>
        </table>
    </form>
    </>
    )
}