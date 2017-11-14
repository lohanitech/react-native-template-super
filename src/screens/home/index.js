import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class HomeScreen extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title: 'Home'
    })
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Hello from Home Screen</Text>
            </View>
        )
    }
}

export default HomeScreen;