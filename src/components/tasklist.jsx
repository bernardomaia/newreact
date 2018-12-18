import React, { Component } from "react";
import Task from "./task";

class TaskList extends Component {
  render() {
    //Render lists of tasks by mapping all components on each state, passing down necessary props for control
    return (
      <div>
        {this.props.taskList.map((task, index) => (
          <Task
            onAdvance={this.props.onAdvance}
            onDelete={this.props.onDelete}
            task={this.props.taskList[index]}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;
