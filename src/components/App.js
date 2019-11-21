import React, { Component } from "react";
import Column from "./Column";
import {connect} from "react-redux";

class App extends Component {
  render () {
    const {lists} = this.props;
    return (
      <div className = "App">
        {lists.map(list =>(<Column title = {list.title}
          cards = {list.cards}  />  ))}
      </div>
    );
  } }


const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps) (App);
