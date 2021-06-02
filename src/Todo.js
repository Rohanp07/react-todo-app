import { List, ListItem, ListItemText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import db from './firebase'
import './Todo.css';

const Todo = (props) => {
    return (
        <List class="todos">
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="Dummy Due Date⏰"></ListItemText>
                <IconButton aria-label="delete" onClick={event=>db.collection('todos').doc(props.todo.id).delete()}>
                    <DeleteIcon fontSize="large" />
                </IconButton>
            </ListItem>
        </List>

    )
}

export default Todo;
