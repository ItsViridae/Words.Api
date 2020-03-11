import React, { Component } from 'react';
import Buttonbp from './ButtonTemplate';

export default class Button extends Component{
  constructor(props) {
    super(props)

    this.state = {
      buttonLabel: "Button-reuse"
    }
  }
    


  render()
  {
    return (
      <div>
        <Buttonbp >
          {this.props.state.buttonLabel}
        </Buttonbp>
      </div>
    )
  }
}

