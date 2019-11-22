import React from "react";
import Icon from "@material-ui//core/Icon";
import TextArea from "react-textarea-autosize";
import Card from "./Card";

class ActionButton extends React.Component {
  state = {
    formOpen: false,
    text: ""
  };

  openForm = () => {
    this.setState({
      formOpen: false
    });
  };

  closeForm = e => {
    this.setState({
      formOpen: false
    });
  };

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Add another list" : "Add another card";
    const buttonOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.openForButtonGroup,
          opacity: buttonOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText} </p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;
    const placeholder = list
      ? "Enter list title"
      : "Enter a title for this card...";

    const buttonTutle = list ? "Add List" : "Add Card";

    return (
      <div>
        <Card
          style={{
            minHeight: 80,
            minWidth: 272,
            padding: "6px 8px 2px"
          }}
        >
          <TextArea
            placeholder={placeholder}
            autofocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: "none",
              overflow: "hidden",
              width: "100%",
              outline: "none",
              border: "none"
            }}
          />
        </Card>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  openForButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  }
};

export default ActionButton;
