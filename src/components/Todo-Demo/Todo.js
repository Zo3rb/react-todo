import React from 'react';
import './todo.css';

const Todo = (props) => {

    const {items, deleteItem} = props;
    const length = items.length;
    const listItem = length ? (
        items.map(item => {
            return (
                <div key={item.id}>
                    <span>{item.task}</span>
                    <span onClick={() => deleteItem(item.id)}> <button className="close-btn">&times;</button> </span>
                </div>
            )
        })
    ) : <p className="no-tasks">There's No Tasks to Show 😏😏😏 </p>

    return (
        <div className="todoComp">
            {listItem}
        </div>
    )

}

export default Todo;
