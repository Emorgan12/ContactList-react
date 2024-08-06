import React, { useState } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<Delete />, document.getElementById('app'));

function Delete() {
    return (
    <>
    <form action="get" className="search">
        <input type="text" className="search-bar" id="search"/>
    </form>
    <table className="list">
        <tbody>
            <tr id="contactHead" className="contact">
                <th>Name</th>
                <th>Number</th>
            </tr>
            <tr id="contact1" className= "contact">
                <td>
                    <p>placeholder</p>
                </td>
                <td>
                    <p>placeholder</p>
                </td>
            </tr>
            <tr id="contact2" className= "contact">
                <td>
                    <p>placeholder</p>
                </td>
                <td>
                    <p>placeholder</p>
                </td>
            </tr>
            <tr id="contact3" className= "contact">
                <td>
                    <p>placeholder</p>
                </td>
                <td>
                    <p>placeholder</p>
                </td>
            </tr>
        </tbody>
    </table>
    </>
    )
}