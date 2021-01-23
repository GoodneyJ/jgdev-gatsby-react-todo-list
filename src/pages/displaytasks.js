import React from 'react'


export default class DisplayTasks extends React.Component {


    //Render method
    render() {

        //MAP for displaying the task list from state, and buttons for each task to complete/delete
        let tasks = this.props.tasks.map(task =>
                    <li key={task.id}>
                        <button className='libtn complete' onClick={() => this.props.onComplete(task)}>
                            &#x2714;
                        </button>

                        <p id={`task-item`+task.task}>{task.task}</p>

                        <button onClick={() => this.props.removeItem(task)} className='libtn del'>X</button>
                    </li>);

        return (
            <div id="app-wrap">
                <ul>
                    {tasks}
                </ul>
                
            </div>
        )
    }
}
