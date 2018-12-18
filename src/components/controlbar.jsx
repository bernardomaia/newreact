import React, { Component } from "react";

class ControlBar extends Component {
  state = {
    //States for  storing the current value of the input fields
    newName: "New Task",
    newTime: "1",
    newPrior: "Medium"
  };

  handleInputChange = evt => {
    //Updates the state on every change of the input 
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    //Render the title of the app, plus input fields and the button for adding new tasks 
    return (
      <nav className="navbar navbar-light bg-light">
        <h1 className="row">Kanban Board</h1>
        <form>
          <div className="form-row">
            <div className="col">
              <input
                name="newName"
                type="text"
                className="form-control"
                placeholder="Nova Tarefa"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col-md1">
              <input
                name="newTime"
                type="number"
                className="form-control"
                min="0"
                placeholder="0"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="newPrior"
                value="High"
                onChange={this.handleInputChange}
              />
              <label className="form-check-label" for="inlineRadio1">
                High
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="newPrior"
                value="Medium"
                onChange={this.handleInputChange}
              />
              <label className="form-check-label" for="inlineRadio2">
                Medium
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="newPrior"
                value="Low"
                onChange={this.handleInputChange}
              />
              <label className="form-check-label" for="inlineRadio3">
                Low
              </label>
            </div>
          </div>
        </form>
        <button
          className=" btn btn-primary m-1"
          onClick={() => this.props.onAdd(this.state)}
        >
          Add Task
        </button>
      </nav>
    );
  }
}

export default ControlBar;
