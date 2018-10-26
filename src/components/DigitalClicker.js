import React from 'react'

export default class DigitalClicker extends React.component{

  constructor() {
    super();

    this.state ={
      timesClicked = 0
    };
  }

  handleEvent = () => {
    this.setState({
      timesClicked ++ this.state.timesClicked
    })
  }

  render() {
    return(
      <button onClick={this.handleEvent}>{this.state.timesClicked}</button>
    )
  }
}
