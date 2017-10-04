// @flow
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import Radium from 'radium';
import  { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Segment } from 'semantic-ui-react';


//Code goes here
@connect((store) => {
    return {
      }
})
@Radium
export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
        logState: null
    };
  }
  render() {
    return (
      <Segment onClick={this.login.bind(this)}>
        Welcome to Project Lilly
      </Segment>
    )
  }
  login(e){
    e.preventDefault();
    this.props.dispatch(push('/dash'));
  }
}

//Radium stylesheet
