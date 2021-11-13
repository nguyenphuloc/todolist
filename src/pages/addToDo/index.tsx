import React from 'react';
import './styles.scss';

export default function AddToDo(){
    return(
        <div className="page-add">
            <h1>Add ToDo List</h1>
            <h3>Content</h3>
            <input 
                placeholder="write content..."
            />
            <button>Submit</button>
        </div>
    )
}