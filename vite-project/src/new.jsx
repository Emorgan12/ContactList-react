import React, { useState } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<New />, document.getElementById('app'));

function New() {
  return (
    <>
      <form action="post">
        <div>
            <label htmlFor="name" className="labels">Name</label><br />
            <input type="text" id="name" name="name" className="new-inputs"/>
        </div>
        <div>
            <label htmlFor="number" className="labels">Number</label><br />
            <input type="tel" id="number" name="number" className="new-inputs"/>
        </div>
        <div className="container">
            <button className="new-buttons" type="submit">Save</button>
            <button className="new-buttons" type="reset">Discard</button>
        </div>
    </form>
    </>
  )
}

export default App
