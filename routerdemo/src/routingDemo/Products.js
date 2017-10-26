import React from 'react';
import { Route, Link, NavLink } from "react-router-dom";
import AddBook from './AddBook';
import Details from './Details';

class Products extends React.Component {
  constructor(props) {
    super(props);
    console.log("props",props);
    this.state = { bookStore: props.bookStore }
  }

  onBookWasAdded = ()=>{
    //Nice and easy way to force a rerender
    this.forceUpdate();
  }


  render() {
    const books = this.state.bookStore.books;
    let bookStore = this.state.bookStore;
    const match = this.props.match; // når vi har en komponent, og i parents komponent har vi <Comp name = {}> så kan child komponent bruger noget med this.props.name
    return (<div>
      <h2>Our Products</h2>
      <h4>All our great books </h4>
      <ul>
        {books.map((book) => <li key={book.id}>
          <NavLink activeClassName="activeV2"
                   to={`${match.url}/detail/${book.id}`}>{book.title}</NavLink></li>)}
      </ul>
      <Link to={`${match.url}/add`}>Add book</Link>

      <div style={{ backgroundColor: "lightGray", padding: 5, marginTop: 10 }}>
        <Route path={`${match.url}/add`} render={(props) => <AddBook bookStore={bookStore}
                                                                     onAddBook={this.onBookWasAdded} />} />
        <Route path={`${match.url}/detail/:id`} render={(props) => {
          return (<Details {...props} bookStore={bookStore} />)
        }} />
      </div>
    </div>)
  }
}
//Views end

export default Products;
