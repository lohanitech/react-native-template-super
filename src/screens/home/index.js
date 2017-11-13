import React from 'react';
import { Text } from 'react-native';

class HomeScreen extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title: 'Home'
    })
    render(){
        return(
            <Text>Hello from Home Screen</Text>
        )
    }
}

export default HomeScreen;