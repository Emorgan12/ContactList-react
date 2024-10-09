import React, { useState } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<New />, document.getElementById('app'));

function New() {

  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const name = data.get('name');
    const number = data.get('number');
    
    fetch('http://127.0.0.1:5000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, number }),
    })
      .then((data) => {
        console.log('Success:', data);
        alert('Contact added successfully');
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error.message);
      });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name" className="labels">Name</label><br />
        <input type="text" id="name" name="name" className="new-inputs"/>
        </div>
        <div>
            <label htmlFor="number" className="labels">Number</label><br />
            <input type="tel" id="number" name="number" className="new-inputs"/>
        </div>
        <div className="container">
            <button className="new-buttons">Save</button>
            {/* <button className="new-buttons" type="reset">Discard</button> */}
        </div>
      </form>
    </>
  )
}

export default New
