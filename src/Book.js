import React from 'react';

function Book(props) {
  return (
    <div className="book-card">
      <h3 className="title">{props.data.title}</h3>
      <ul>
        <li className="book-data">Author: {props.data.author}</li>
        <li className="book-data">Pages: {props.data.pages}</li>
        <li className="book-data">Read: {props.data.read}</li>
      </ul>
     
      <button
        onClick={() => props.handleDeleteBook(props.id)}
        className="remove-btn"
      >
        Delete
      </button>
    </div>
  );
}

export default Book;
