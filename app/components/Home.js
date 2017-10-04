import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import Radium from 'radium';
import { push } from 'react-router-redux';
import  { connect } from 'react-redux';
import { ipcRenderer } from 'electron';
import { Segment } from 'semantic-ui-react';


@connect((store) => {
    return {
      }
})
@Radium
export default class extends Component {
    constructor(props) {
        super(props);
    
          this.state = {
              selected: '',
              notifica: 'hide',
              menu: 'ui left vertical inverted labeled icon sidebar menu'
          };
    }

    render(){
        return(
         <Segment onClick={this.logout.bind(this)}>Hi this is Home</Segment>
        )
    }
    logout(e){
        e.preventDefault();
        this.props.dispatch(push('/login'));
      }
}