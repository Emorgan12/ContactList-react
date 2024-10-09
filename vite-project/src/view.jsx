import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const BASE_URL = 'http://127.0.0.1:5000/items';


function View() {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => setContacts(data))
        .catch((error) => {
            console.error('Error fetching data:', error);
            setError(error.message);
        });
    }, []);
    return (
    <>
    <form action="get" className="search">
        <img src="../src/search-icon.png" alt="search" className="search-icon"/><input type="text" className="search-bar" id="search"/>
    </form>
    {error ? (
    <div className="error">Error: {error}</div>
    ) : <table className="list">
            <tbody>
                <tr id="contactHead" className="contact">
                    <th>Name</th>
                    <th>Number</th>
                </tr>
                        {contacts.map((contact, i) => {
                            return (
                                <tr className="contact">
                                    <td>{contact.name}</td>
                                    <td>{contact.number}</td>
                                </tr>
                            );
                        })}
        </tbody>
    </table>
    }
    </>
    )
}

ReactDOM.render(<View />, document.getElementById('app'));
export default View;