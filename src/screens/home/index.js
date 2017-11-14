import React from 'react';
import { View } from 'react-native';
import Text from '../../components/text/Text';
import styles from './styles';

class HomeScreen extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title: 'Home'
    })
    render(){
        return(
            <View style={styles.container}>
                <Text h1> Heading 1 </Text>
                <Text h2> Heading 2 </Text>
                <Text h3> Heading 3 </Text>
                <Text h4> Heading 4 </Text>
            </View>
        )
    }
}

export default HomeScreen;