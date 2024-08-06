import React, { useState } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<Edit />, document.getElementById('app'));

function Edit() {
return (
    <>
    <form action="get">
        <div>
            <h1>Find ID</h1>
            <label htmlFor="name" className="labels">Name</label><br />
            <input type="number" id="name" name="name" className="edit-inputs"/>
        </div>
        <div className="container">
            <button className="new-buttons" type="submit">Search</button>
        </div>
    </form>
    <div className="container" id= "contacts">
    </div>
    <form action="post">
        <div>
            <label htmlFor="id" className="labels">ID</label><br />
            <input type="text" id="id" name="id" className="edit-inputs"/>
        </div>
        <div>
            <label htmlFor="name" className="labels">Name</label><br />
            <input type="text" id="name" name="name" className="edit-inputs" placeholder= "Leave blank if not changing"/>
        </div>
        <div>
            <label htmlFor="number" className="labels">New Number</label><br />
            <input type="tel" id="number" name="number" className="edit-inputs" placeholder= "Leave blank if not changing"/>
        </div>
        <div className="container">
            <button className="new-buttons" type="submit">Save</button>
            <button className="new-buttons" type="reset">Discard</button>
        </div>
    </form>
    </>
)
}