
import React, { Component } from "react";
import Column from "./Column"
import "./App.css";

const DIRECTION_LEFT = -1;
const DIRECTION_RIGHT = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          name: "Backlog",
          cards: [{ name: "Card A" }]
        },
        {
          name: "In Progress",
          cards: [{ name: "Card B" }]
        },
        {
          name: "Done",
          cards: [{ name: "Card C" }]
        }
      ]
    };
  }
    render() {
       return (
         <div className="App">
           {this.state.columns.map((column, columnIndex) => (
             <Column
               column={column}
               columnIndex={columnIndex}
               key={columnIndex}
              // onMoveLeft={cardIndex => this.handleMove(columnIndex, cardIndex, DIRECTION_LEFT)}
              // onMoveRight={cardIndex => this.handleMove(columnIndex, cardIndex, DIRECTION_RIGHT)}
              // onAddCard={() => this.handleAdd(columnIndex)}
             />
           ))}
         </div>
       );
     }
   }

export default App;
