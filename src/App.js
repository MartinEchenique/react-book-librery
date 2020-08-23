import React from 'react';
import BookLibrary from './BookLibrary';
import Header from './Header';
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <BookLibrary />
      </div>
    );
  }
}

export default App;
