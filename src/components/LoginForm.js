import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from './common';
import {Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {Spinner} from './common';

import {emailChanged, passwordChanged, loginUser} from '../actions';

class LoginForm extends Component {
    onEmailText(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    renderButton() {
        if (this.props.isLoading) {
            return (
                <Spinner size="large"/>
            )
        } else {
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Login
                </Button>
            )
        }
    }

    render() {
        const {email, password, err} = this.props;
        const {errTextsTyle} = styles;

        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email" 
                        placeholder="email@email.com"
                        onChangeText={this.onEmailText.bind(this)} 
                        value={email}
                    />
                </CardSection>
               
                <CardSection>
                    <Input 
                        secureTextEntry={true} 
                        label="Password" 
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={password}
                    />
                </CardSection>

                
                <Text style={errTextsTyle}>
                    {err}
                </Text>
                
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    errTextsTyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }    
})


const mapStateToProps = (state) => {
    const {email, password, err, isLoading} = state.auth;
    return {
        email: email,
        password: password,
        err: err,
        isLoading: isLoading
    }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);