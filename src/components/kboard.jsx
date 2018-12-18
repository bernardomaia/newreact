import React, { Component } from "react";
import ControlBar from "./controlbar";
import TaskList from "./tasklist";

class KanbanBoard extends Component {
  state = {
    //Lists of tasks for each stage of development 
    backlog: [],
    to_do: [],
    in_progress: [],
    testing: [],
    done: []
  };

  handleAdd = task => {
    //Add new task on the backlog
    let backlog = [...this.state.backlog];
    let newTask = {
      id: Date.now(),
      name: task.newName,
      time: task.newTime,
      prior: task.newPrior,
      taskState: "backlog"
    };
    backlog.push(newTask);
    this.setState({ backlog });
  };

  findState = taskState => {
    //Returns the list of tasks currently containing a task 
    switch (taskState) {
      case "backlog":
        return this.state.backlog;
      case "to_do":
        return this.state.to_do;
      case "in_progress":
        return this.state.in_progress;
      case "testing":
        return this.state.testing;
      case "done":
        return this.state.done;
    }
  };

  handleDelete = task => {
    //Returns a new list of tasks filtering out the received task
    let currentTaskState = this.findState(task.taskState);
    let newTaskList = currentTaskState.filter(t => t.id !== task.id);
    this.setState({ [task.taskState]: newTaskList });
  };

  findNextState = taskState => {
    //Returns a the list of tasks that is next on the development cycle 
    switch (taskState) {
      case "backlog":
        return "to_do";
      case "to_do":
        return "in_progress";
      case "in_progress":
        return "testing";
      case "testing":
        return "done";
      case "done":
        return "done";
    }
  };

  handleAdvance = task => {
    //Advances a task on the development cycle
    if (task.taskState === "done") return;

    this.handleDelete(task);
    let nextTaskStateName = this.findNextState(task.taskState);
    let nextTaskState = this.findState(nextTaskStateName);

    task.taskState = nextTaskStateName;
    nextTaskState.push(task);

    this.setState({ [nextTaskStateName]: nextTaskState });
  };

  render() {
    let taskLists = [
      this.state.backlog,
      this.state.to_do,
      this.state.in_progress,
      this.state.testing,
      this.state.done
    ];
    return (
      <React.Fragment>
        <ControlBar onAdd={this.handleAdd} />
        <div className="container">
          <div className="row bg-secondary">
            <h2 className="col">Backlog</h2>
            <h2 className="col">To Do</h2>
            <h2 className="col">In Progres</h2>
            <h2 className="col">Testing</h2>
            <h2 className="col">Done</h2>
          </div>
          <div className="row">
            {taskLists.map((task, index) => (
              <div className="col">
                <TaskList
                  onAdvance={this.handleAdvance}
                  onDelete={this.handleDelete}
                  taskList={taskLists[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default KanbanBoard;
