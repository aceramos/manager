import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';


import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift, isLoading } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday', isLoading: true });
  }

  renderButton() {
    const {isLoading} = this.props;
    if(isLoading) {
      return (
        <Spinner size="large"/>
      )
    } else {
        return (
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        )      
    }
  }

  render() {
    console.log(this.props.employee)
    return (
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift, isLoading } = state.employeeForm;
  return { name, phone, shift, isLoading };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);