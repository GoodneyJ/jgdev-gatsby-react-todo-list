import React, { Component } from 'react'
import { FaCheck, FaTimes } from "react-icons/fa";

export default class DisplayTasks extends React.Component {
    //Constructor
    constructor(props) {
        super(props)

    }

    //Render method
    render() {

        //MAP for displaying the task list from state, and buttons for each task to complete/delete
        let tasks = this.props.tasks.map(task => <li id={`task`+task.task} key={task.id}><button className='libtn complete' onClick={() => this.props.onComplete(task)}><FaCheck /></button>{task.task}<button onClick={() => this.props.removeItem(task)} className='libtn del'><FaTimes /></button></li>)
        return (
            <div>
                <ul>
                    {tasks}
                </ul>
                
            </div>
        )
    }
}
