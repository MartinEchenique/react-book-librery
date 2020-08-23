import React from 'react';
import './App.css';
import SearchBook from './SearchBook';
import Book from './Book';
class BookLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      isAddFormVisible: false,
      addBookForm: {
        title: '',
        author: '',
        pages: '',
        read: false,
        filter: false,
      },
      addBookFormClear: { title: '', author: '', pages: '', read: false },
      books: [
        {
          data: { title: 'book 0', author: 'person', pages: '150', read: true },
          id: 0,
        },
        {
          data: {
            title: 'book 1',
            author: 'person',
            pages: '150',
            read: false,
          },
          id: 1,
        },
        {
          data: { title: 'book 2', author: 'person', pages: '150', read: true },
          id: 2,
        },
      ],
      id: 3,
    };
    this.handleAddBookFormChange = this.handleAddBookFormChange.bind(this);
    this.handleAddBookForm = this.handleAddBookForm.bind(this);
    this.renderBooks = this.renderBooks.bind(this);
    this.handleDeleteBook = this.handleDeleteBook.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAddBookForm() {
    this.setState((prevState) => {
      const newState = !prevState.isAddFormVisible;
      return {
        isAddFormVisible: newState,
        addBookForm: { ...this.state.addBookFormClear },
      };
    });
  }
  handleSubmit() {
    if (this.state.addBookForm.title === '') {
      return;
    }
    const book = {
      data: {
        ...this.state.addBookForm,
      },
      id: this.state.id,
    };

    this.setState((prevState) => {
      return {
        id: (prevState.id += 1),
        books: this.state.books.concat(book),
        addBookForm: { ...this.state.addBookFormClear },
      };
    });
  }
  handleDeleteBook(id) {
    this.setState((prevstate) => {
      return { books: prevstate.books.filter((book) => book.id !== id) };
    });
  }
  handleAddBookFormChange(event) {
    const { value, name, type } = event.target;
    this.setState((prevState) => {
      const newState = { ...prevState };
      if (type === 'checkbox') {
        newState.addBookForm[name] = !prevState.addBookForm[name];
        return { newState };
      }
      newState.addBookForm[name] = value;
      return { newState };
    });
  }
  renderBooks() {
    let bookList;
    if (this.state.addBookForm.filter) {
      bookList = this.state.books.filter((book) => {
        return book.data.title.includes(this.state.addBookForm.title);
      });
    } else {
      bookList = this.state.books;
    }
    return bookList.map((book) => (
      <Book
        data={{ ...book.data, read: book.data.read ? 'Yes' : 'No yet' }}
        key={book.id}
        id={book.id}
        handleDeleteBook={this.handleDeleteBook}
      />
    ));
  }

  render() {
    const renderForm = this.state.isAddFormVisible ? (
      <SearchBook
        handleSubmit={this.handleSubmit}
        handleAddBookForm={this.handleAddBookForm}
        handleChange={this.handleAddBookFormChange}
        handleSearch={this.handleSearch}
        filter={this.state.addBookForm.filter}
        data={this.state.addBookForm}
      />
    ) : (
      <button
        onClick={this.handleAddBookForm}
        name="startForm"
        id="add-new-book"
      >
        Add Book
      </button>
    );

    return (
      <div className="App">
        {renderForm}
        <div id="books-container">{this.renderBooks()}</div>
      </div>
    );
  }
}

export default BookLibrary;
