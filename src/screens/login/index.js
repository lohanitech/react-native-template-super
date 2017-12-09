import React, { Component } from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Text, Button, Card, FormInput } from '../../components';
import styles from './styles';

class LoginScreen extends Component{
    state = {
        username: '',
        password: '',
        error: null
    }    

    handleLoginPress = () => {
        (this.state.username == "" || this.state.password == "") && this.setState({error: "username and password fields cannot be empty"});
        console.log("Login with username: " + this.state.username + " password: " + this.state.password);
    }

    handleRegisterPress = () =>{
        
    }
    
    render(){
        return(
            <ImageBackground source={require('../../assets/login_background.jpg')} style={styles.container}>
                <View style={styles.overlay}>
                    <View style={styles.formContainer}>
                        <Card title="LOGIN">
                            <FormInput
                                onChangeText={text=>this.setState({username: text})}
                                placeholder="username"
                                />
                            <FormInput
                                onChangeText={text=>this.setState({password: text})}
                                placeholder="password"
                                secureTextEntry={true}
                            />
                            {this.state.error && <Text style={styles.error}>{this.state.error}</Text> }
                            <Button onPress={this.handleLoginPress} title="LOGIN" />
                            <TouchableOpacity style={styles.forgotPassword}>
                                <Text style={styles.forgotPasswordText}>Forgot my password</Text>
                            </TouchableOpacity>
                        </Card>
                    </View>
                    <View style={styles.signupContainer}>
                        <TouchableOpacity onPress={this.handleRegisterPress}>
                            <Text h4 style={styles.registerText}>Create an Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}


export default connect()(LoginScreen);