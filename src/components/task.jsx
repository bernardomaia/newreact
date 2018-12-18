import React, { Component } from "react";

class Task extends Component {

  getCardColor = prior => {
    //Defines task color based on its priority 
    switch (prior) {
      case "High":
        return "card text-center bg-warning m-1";
      case "Medium":
        return "card text-center bg-Light m-1";
      case "Low":
        return "card text-center bg-success m-1";
    }
  };

  render() {
    //Render main components from a task and buttons with basic functionalities 
    return (
      <div className={this.getCardColor(this.props.task.prior)}>

        <h6 className="lead">
          <span>{this.props.task.name}</span>
        </h6>
        <h6>
          <span>{this.props.task.time} {(this.props.task.time == "1") ? "hour":"hours"}</span>
        </h6>
        <h6>
          <span>{this.props.task.prior}</span>
        </h6>
        <div className="btn-group btn-group-sm">
          <button
            className="btn btn-info btn-sm"
            data-toggle="tooltip"
            title="Advance Task"
            onClick={() => this.props.onAdvance(this.props.task)}
          >
            &#9654;
          </button>
          <button
            className="btn btn-danger btn-sm"
            data-toggle="tooltip"
            title="Delete Task"
            onClick={() => this.props.onDelete(this.props.task)}
          >
            &#10006;
          </button>
        </div>
      </div>
    );
  }
}

export default Task;
