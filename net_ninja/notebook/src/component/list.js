import React from 'react';

const List = (props) => {
    const { notes, deleteNote } = props;
    const noteList = notes.map(note => {
        return note.id > 0 ? (
            <div className='note' key={note.id}>
                <div>Title : {note.title}</div>
                <div>Content : {note.content}</div>
                {/* since we don't want to automatically fire this function, we use arrow function to wrap deleteNote function */}
                <button onClick={() => deleteNote(note.id)}>Delete note</button>
            </div>
        ) : null;
    })
    return (
        <div className="ninja-list">
            {noteList}
        </div>
    )

}

export default List;