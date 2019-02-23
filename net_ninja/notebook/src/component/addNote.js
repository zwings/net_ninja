import React, { Component } from 'react'

class AddNote extends Component {
    state = {
        title: null,
        content : null,
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        this.props.addNote(this.state);
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
            <label htmlFor="content">content</label>
            <input type="text" id="content" onChange={this.handleChange}/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default  AddNote;