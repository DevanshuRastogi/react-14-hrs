import { Component } from "react";

export default class ClassBasedComponent extends Component {
  state = {
    showText: false,
    changeColor: false,
  };

  handleClick = () => {
    console.log("button click");

    // //never recommeneded , kyuki ye component ko re render nhi krta
    // this.state.showText = !this.state.showText
    const { showText } = this.state;
    this.setState({
      showText: !showText,
      
    });
  };


  handleHover=()=>{

    const {changeColor} = this.state
    this.setState({
       
        changeColor: !changeColor,
      });
  }
  render() {
    console.log(this.state);
    const { showText, changeColor } = this.state;
    return (
      <>
        {showText ? <h1>Hari Narayan</h1> : null}
        <h2 onMouseOver={this.handleHover} style={{ color: changeColor ? "red" : "black" }}>Hello dev</h2>

        <button onClick={this.handleClick}>toggler</button>
      </>
    );
  }
}
