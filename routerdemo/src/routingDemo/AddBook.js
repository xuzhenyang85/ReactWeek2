import React from 'react';
import bookStore from './BookStore';

//Todo: This component must be completed
class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "book": { title: "", info: "" }, isDirty: false }
  }
  onSave = () => {
    bookStore.addBook(this.state.book);
    this.props.bookStore;
  } // har noget tilstand som kan smides op
  onChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;

    if(name === 'title'){
        this.state.book.title = val;
    }
    else if(name === 'info'){
      this.state.book.info = val;
    }
  } // har noget ændret
  render() {
    return (
      <div>
        Title: <input name="title"  onChange = {this.onChange} />
        Info: <input name="info" onChange = {this.onChange} />
        <button onClick={this.onSave}>Save</button>
        {/*
         <Prompt
         when={this.state.isDirty}
         message="Yoy have unsaved data that will be lost!"
         />*/}
      </div>
    )
  }
}

export default AddBook;
