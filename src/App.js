import React, { Component } from "react";
import KanbanBoard from "./components/kboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <KanbanBoard />
      </div>
    );
  }
}

export default App;
