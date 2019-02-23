import React, { Component } from 'react';
import List from "./component/list";
import AddNote from "./component/addNote";
import './App.css';

class App extends Component {
  state ={
    notes:[
      {title : "1" , content :"good day", id:"1" },
      {title : "2" , content :"good day", id:"2" },
      {title : "3" , content :"good day", id:"3" },
    ]
  }
  addNote =(note) =>{
    note.id = this.state.notes.length + 1;
    let notes = [...this.state.notes, note];
    this.setState({
      notes : notes
    })
  }
  deleteNote = (id) =>{
    let notes = this.state.notes.filter(note =>{
      return  note.id !== id
    });
    this.setState({
      notes : notes
    })
  }
  componentDidMount(){
    console.log('component mounted')
  }

  componentDidUpdate(prevProps, prevState){
    console.log('component updated');
    console.log(prevProps,prevState);
  }

  render() {
    return (
      <div className="App">
        <List deleteNote={this.deleteNote} notes={this.state.notes}/>
        <AddNote addNote={this.addNote}/>
      </div>
    );
  }
}

export default App;
