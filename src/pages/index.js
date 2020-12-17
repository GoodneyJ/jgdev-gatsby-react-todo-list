import React, { Component } from 'react'
import DisplayTasks from './displaytasks.js'
import Styles from './styles.css'

export default class Index extends React.Component {
  //Constructor
  constructor(props) {
    super(props)

    this.state = {
      className: '',
      counter: 0,
      input: '',
      taskList: [{id: 1, task: 'taskOne'},{id:2, task: 'taskTwo'}, {id:3, task: 'taskThree'}]
    }
    this.onChangeInput = this.onChangeInput.bind(this)
    this.onRemoveItem = this.onRemoveItem.bind(this)
    this.onComplete = this.onComplete.bind(this)
  }

  //Method that grabs user-input
  onChangeInput = (event) => {
    this.setState({input: event.target.value})
  }

  //Method that takes the input and adds to state
  onAddItem = () => {
    if(this.state.input !== '') {
      this.setState({
        taskList: [...this.state.taskList, {id: this.state.taskList.length+1, task: this.state.input}],
        input: ''
      })

    } else {
      alert('cannot be empty')
    }
  }

  //Method removes item from state
  onRemoveItem = (e) => {
    let newList = this.state.taskList.filter(task => task !== e)
    console.log(newList)
    this.setState({
      taskList: newList
    })
  }

  //method applies text affect to specific element, had to rework it from using the IDs because it would break after adding new and deleting existing items.
  //Will return to rework this
  onComplete = (e) => {
    let clickedEl = document.getElementById('task' + e.task)
    this.state.counter % 2 === 0 ? clickedEl.style.textDecoration = 'line-through' : clickedEl.style.textDecoration = 'none';
    this.setState({
      counter: this.state.counter + 1
    })
  }

  //Render method
  render() {
    return (
      <div id='wrapper'>
        <h2>Task List</h2>
        <DisplayTasks
          className={this.state.className}
          tasks={this.state.taskList}
          removeItem={this.onRemoveItem}
          onComplete={this.onComplete}
        />
        {/* USER INPUT SECTION */}
        <div id='form'>
          <input type="text" value={this.state.input} onChange={this.onChangeInput}/>
          <button id='btn' type="button" onClick={this.onAddItem}>ADD</button>
        </div>

      </div>
    )
  }
}


