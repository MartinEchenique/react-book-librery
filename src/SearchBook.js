import React from 'react';

function SearchBook(props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleSubmit();
      }}
      className="add-new-book-form"
    >
      <label>
        Title:
        <input
          type="text"
          value={props.data.title}
          name="title"
          onChange={props.handleChange}
          required
        />
      </label>
      <label>
        <br />
        Author:
        <input
          type="text"
          value={props.data.author}
          name="author"
          onChange={props.handleChange}
        />
      </label>
      <label>
        <br />
        Number of pages:
        <input
          type="number"
          name="pages"
          value={props.data.pages}
          onChange={props.handleChange}
        />
      </label>
      <label>
        <br />
        Read?
        <input
          type="checkbox"
          name="read"
          checked={props.data.read}
          onChange={props.handleChange}
        />
      </label>
      <br />
      <button> Add</button>
      <button type="button" onClick={props.handleAddBookForm} name="finish">
        Finish
      </button>
      <label>
        <br />
        Filter
        <input
          type="checkbox"
          name="filter"
          checked={props.filter}
          onChange={props.handleChange}
        />
      </label>
    </form>
  );
}

export default SearchBook;
